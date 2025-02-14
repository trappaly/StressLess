var request = require("request");
var mkdirp = require("mkdirp");
var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var Promise = require("bluebird");

Promise.promisifyAll(request);

function GetCache(root, options) {
	this.root = root;
	this.options = options || {};
	_.defaults(this.options, GetCache.defaults);
}
GetCache.defaults = {
	lockTimeout: 3
};

GetCache.prototype = {
	get: function(url) {
		var self = this;

		return self._readCache(url)
		.then(function(cache){
			return request.getAsync({
				headers: {
					"if-none-match": (cache.etag && cache.data) ? cache.etag.toString() : ""
				},
				encoding: null,
				uri: url
			});
		})
		.spread(function(res,body){
			if (res.statusCode === 304) {
				return cache.data;
			} else if (res.statusCode === 200) {
				cache.etag = res.headers.etag;
				cache.data = body;
				return self._writeCache(url,cache)
				.return(cache.data);
			} else {
				return Promise.reject(res);
			}
		});
	},
	_safeRead: function(filename) {
		return fs.existsSync(filename) ? fs.readFileSync(filename) : null;
	},
	_rmLock: function(dir) {
		dir = path.join(dir, "lock");
		try {
			fs.rmdirSync(dir)
		} catch(err) {
			console.log(err)
		}

	},

	_getLock: function(dir, timeout) {
		var self = this;

		if (typeof timeout === "undefined") timeout = self.options.lockTimeout;
		mkdirp.sync(dir);
		var lockDir = path.join(dir,"lock");
		return fs.mkdirAsync(lockDir)
		.catch(function(err){
			if (timeout === 0) {
				if (/EEXIST/.test(err.message)) {
					throw new Error("Could not get lock on dir: " + lockDir + "\n" +
						"If you are sure nothing is using it, you may remove this directory and try again.");
				} else {
					throw err;
				}
			}
			timeout--;
			return Promise.delay(1000)
			.then(function(){
				return self._getLock(dir,timeout);
			});
		});
	},
	_writeCache: function(url,obj){
		var self = this;
		var data = obj.data;
		var etag = obj.etag;
		dir = path.join(self.root, escape(url));
		return self._getLock(dir)
		.then(function(){
			fs.writeFileSync(path.join(dir,"etag"), etag);
			fs.writeFileSync(path.join(dir,"data"), data);
		})
		.finally(function(){
			return self._rmLock(dir);
		});
	},
	_readCache: function(url) {
		var self = this;
		dir = path.join(self.root, escape(url));
		return self._getLock(dir)
		.then(function(){
			return {
				etag: self._safeRead(path.join(dir, "etag")),
				data: self._safeRead(path.join(dir, "data"))
			};
		})
		.finally(function(){
			return self._rmLock(dir);
		});
	}
}

exports.GetCache = GetCache;
