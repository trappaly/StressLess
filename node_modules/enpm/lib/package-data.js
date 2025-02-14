var _ = require("lodash");
var _versions = require("./versions");
var Promise = require("bluebird");

function PackageData(packageResolvers, logger){
	this.cache = {};
	this.resolvers = packageResolvers;
	this.log = logger || require("./logger-api");
	_.bindAll(this);
}

PackageData.prototype = {
	_saveCache: function(name, version, json) {
		this.cache[name] = this.cache[name] || {};
		this.cache[name][version] = json;
		return json;
	},
	_getCache: function(name, wanted) {
		var versions = this.cache[name] ? Object.keys(this.cache[name]) : [];
		var latest = _versions.latest(versions, wanted);
		
		return latest ? this.cache[name][latest] : null;
	},
	getVersion: function(name, wanted, resolvers) {
		var self = this;
		
		resolvers = (resolvers || self.resolvers).slice(0);
		wanted = wanted || "*";
		
		var cached = self._getCache(name,wanted);
		
		if (cached) return Promise.resolve(cached);

		if (resolvers.length === 0) {
			return Promise.reject(new Error(
				"Could not find package: " + name + "@" + wanted));
		} else {
			var resolver = resolvers.shift();
			
			return Promise.cast(resolver.getVersion(name, wanted))
			.then(function(json){
				if (!json) return Promise.reject(new Error("no data"));
				self._saveCache(json.name, json.version, json);
				return json;
			})
			.catch(function(err){
				self.log.debug("NOPKG: " + resolver.name);
				self.log.debug(err.message);
				if (resolvers.length > 0) {
					return self.getVersion(name,wanted,resolvers);
				} else {
					return Promise.reject(new Error("Could not find package: " + name + "@" + wanted));
				}
			});
		}
	}
};

module.exports = PackageData;
