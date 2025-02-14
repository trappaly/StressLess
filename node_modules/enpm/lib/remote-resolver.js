var request = require("request");
var url = require("url");
var zlib = require("zlib");
var Promise = require("bluebird");

Promise.promisifyAll(request);
Promise.promisifyAll(zlib);

var _versions = require("./versions");


function Remote(registry, logger, opts) {
	this.registry = registry;
	this.cache = {};
	this.log = logger || require("./logger-api");
	this.name = "REMOTE:" + registry;
	this.opts = opts||{};
}
Remote.prototype = {
	getPkgJson: function(moduleName, version) {
		return this.getPkg(moduleName)
		.then(function(pkgs){
			return pkgs.versions[version] || null;
		});
	},
	getVersion: function(moduleName, wanted) {

		var self = this;
		var json = null;
		
		// if (!self.opts.gzip) {
		// 	// this works with more sockets, Ideally we would use the method below, but since
		// 	// couch nor the registry support gzip, its prohibitly expensive so we rely on node's keepalive/pooling
		// 	return self._getJSON(url.resolve(self.registry,encodeURIComponent(moduleName) + "/" + encodeURIComponent(wanted)))
		// 	.then(function(json){
		// 		return {
		// 			name: moduleName,
		// 			version: json.version,
		// 			remote: true,
		// 			path: json.dist.tarball,
		// 			pkg: json
		// 		};
		// 	});
		// } else {
			return self.getVersions(moduleName)
			.then(function(versions){
				var latest = _versions.latest(versions, wanted);
				
				if (latest) {
					return self.getPkgJson(moduleName, latest)
					.then(function(pkgJson){
						return {
							name: moduleName,
							version: latest,
							remote: true,
							path: pkgJson.dist.tarball,
							pkg: pkgJson
						};
					});
				} else {
					return null;
				}
			});
		// }
	},
	getVersions: function(moduleName) {
		return this.getPkg(moduleName)
		.then(function(pkgs){
			return Object.keys(pkgs.versions);
		})
		.catch(function(err){
			return [];
		});
	},
	getPkg: function(moduleName) {
		var self = this;
		if (self.cache[moduleName]) return Promise.cast(self.cache[moduleName]);
		
		var pkgUrl = url.resolve(self.registry, moduleName);
		self.cache[moduleName] = self._getJSON(pkgUrl)
		.then(function(pkgs){
			return pkgs;
		});
		
		return self.cache[moduleName];
	},
	_decompress: function(res,body) {
		if (/gzip|deflate/i.test(res.headers["content-encoding"]||"")) {
			return Promise.join(res, zlib.unzipAsync(body));
		} else {
			return [res, body];
		}
	},
	_getJSON: function(url) {
		var self = this;
		self.log.debug("GET " + url);
		return request.getAsync({
			uri: url,
			headers: {
				"accept-encoding": "gzip, deflate"
			},
			encoding: null
		})
		.spread(self._decompress)
		.spread(function(res,body){
			if (res.statusCode !== 200) {
				self.log.debug("FAIL " + res.statusCode + " " + url);
				return Promise.reject(body);
			}
			return JSON.parse(body);
		})
		.catch(function(err) {
			self.log.debug("REQUEST FAILED: " + url + " " + err.message);
			return Promise.reject(err);
		});
	}
};

module.exports = Remote;
