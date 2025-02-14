var _ = require("lodash");
var semver = require("semver");

module.exports = {
	sort: function(versions, reverse) {
		return versions.sort(function(a,b){
			a=semver.clean(a);
			b=semver.clean(b);
			if (a === b) return 0;
			else if (semver.gt(a,b)) return reverse ? -1 : 1;
			else if (semver.lt(a,b)) return reverse ? 1 : -1;
		});
	},
	latest: function(versions, wanted) {
		try {
			var sorted = this.sort(versions,true);
			if (wanted === "latest") return versions[0];
			return _.find(sorted, function(version){
				return semver.satisfies(version, wanted);
			});
		} catch (err) {
			err.message = "Processing wanted: " + wanted + " in versions: " + versions.join(",") +
			"\n" + err.message;
			throw err;
		}
	},
	latestMultiple: function(version, wantedVersions) {
		try {
			var sorted = this.sort(versions,true);
			if (wanted === "latest") return versions[0];
			return _.find(sorted, function(version){
				return _.all(wantedVersions, function(wanted){
					return semver.satisfies(version, wanted);
				});
			});
		} catch (err) {
			err.message = "Processing wanted: " + wanted.join(",") + " in versions: " + versions.join(",") +
			"\n" + err.message;
			throw err;
		}
	}
};
