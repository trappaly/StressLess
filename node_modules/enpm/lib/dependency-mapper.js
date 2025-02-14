var _versions = require("./versions");
var _ = require("lodash");
var Promise = require("bluebird");
var semver = require("semver");

function DependencyMapper(packageData, logger){
	this.packageData = packageData;
	this.log = logger || require("./logger-api");
	this.reset();
	_.bindAll(this);
}

DependencyMapper.prototype = {
	reset: function() {
		this.resolving = 0;
		this.dependencies = {};
		this.found = 0;
	},
	progress: function(){
		if (this.resolving > 0) {
			this.log.spinner("Fetching data for " + this.resolving + " packages (" + this.found + " total)");
		} else {
			this.log.spinner(null);
		}
	},
	getDependencies: function() {
		var dependencies = [];
		_.each(this.dependencies, function(versions, name){
			_.each(versions, function(json, version){
				dependencies.push(json);
			});
		});
		return dependencies;
	},
	
	getDependencyMap: function(){
		var self = this;
		var deps = {};
		_.each(self.dependencies, function(packageVersions, packageName){
			deps[packageName] = {};
			_.each(packageVersions, function(versionJson, packageVersion){
				deps[packageName][packageVersion] = self._getDependencies(
					versionJson.pkg.dependencies, packageName + "@" + packageVersion);
			});
		});
		return deps;
	},
	
	getTopDependencyMap: function(dependencies) {
		return this._getDependencies(dependencies, "<top level install>");
	},
	
	_versions: function(packageName) {
		return Object.keys(this.dependencies[packageName]);
	},
	_getDependencies: function(dependencies, title) {
		var self = this;
		var out = {};
		_.each(dependencies||{}, function(wanted, depName){
			var versions = self._versions(depName);
			out[depName] = _versions.latest(versions, wanted);
		});
		
		//do it twice so we check peers against resolved deps since they
		//have priority
		_.each(Object.keys(dependencies||{}), function(depName){
			var peers = self._getPeers(depName, out[depName]);
			_.each(peers, function(peerWanted, peerName){
				if (out[peerName]) {
					if (!semver.satisfies(out[peerName], peerWanted)) {
						var dep = peerName + "@" + dependencies[name][version][peerName];
						var paren = name + "@" + version;
						throw new Error("In package "
							+ title
							+ ": dependency " + peerName + "@" + out[peerName]
							+ " does not satisfy requirement of " + wanted
							+ " from package: " + depName + "@" + out[depName]);
					}
				} else {
					var versions = self._versions(peerName);
					var latest = _versions.latest(versions, peerWanted);
					out[peerName] = latest;
				}
			});
		});
		return out;
	},
	_getPeers: function(packageName, packageVersion) {
		return _.clone(this.dependencies[packageName][packageVersion]
			.pkg.peerDependencies||{});
	},
	
	addDependency: function(name, wantedVersion) {
		var self = this;

		if (self._isSatisfied(name, wantedVersion)) {
			self.log.debug("SKIP " + name + "@" + wantedVersion);
			return Promise.resolve(self);
		} else {
			self.resolving++;
			self.found++;
			self.progress();

			return self.packageData.getVersion(name,wantedVersion)
			.then(function(json){
				self.resolving--;
				self.progress();
				if (self._addDependency(json)) {
					
					var deps = _.extend({}, json.pkg.dependencies||{}, json.pkg.peerDependencies||{});
					
					return Promise.all(_.map(deps, function(wantedVersion, name) {
						return self.addDependency(name, wantedVersion);
					}));
				} else {
					self.found--;
				}
			});
		}
	},
	_addDependency: function(json) {
		if (!this.dependencies[json.name]) this.dependencies[json.name] = {};
		if (this.dependencies[json.name][json.version]) return false;

		this.dependencies[json.name][json.version] = json;
		this.log.debug("DEPENDENCY " + json.name + "@" + json.version);
		
		return true;
	},
	_isSatisfied: function(name, wantedVersion) {
		if (!this.dependencies[name]) return false;
		var versions = Object.keys(this.dependencies[name]);
		var latest = _versions.latest(versions, wantedVersion);
		return !!latest;
	}
};

module.exports = DependencyMapper;
