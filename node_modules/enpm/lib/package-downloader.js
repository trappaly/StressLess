var request = require("request");
var crypto = require('crypto');
var _ = require("lodash");
var tar = require("tar");
var path = require("path");
var fs = require("fs");
var zlib = require("zlib");
var _utils = require("./utils");
var Promise = require("bluebird");

function Downloader(root, logger) {
	this.root = root;
	this.log = logger||require("./logger-api");
	_.bindAll(this);
	this.pkgDir = ".packages";
	
	this.total = 0;
	this.finished = 0;
}

Downloader.prototype = {
	reset: function(){
		this.total = 0;
		this.finished = 0;
		this.toDownload = -1;
		this.toRespond = -1;
		this.log.spinner(null);
		this.log.progress(null);
	},
	downloadAndExtract: function(packages) {
	// would be nice if the registry embeded the size,
	// we can get it if we ask for the full package each time
	// with attachments=true, however, each update means we need
	// to pull down that gigantic file for each repo. *gzip!!*
		var self = this;
		if (packages.length === 0) return Promise.resolve();
		var downloads = this._makeDownloadArray(packages);
		this.reset();
		this.progress();
		this.toDownload = downloads.length;
		this.toRespond = downloads.length;
		//yes it's important
		var s = downloads.length > 1 ? "s" : "";
		this.log.info("Downloading " + downloads.length + " package" + s);
		this.progress(0);
		return Promise.map(downloads, this._download)
		.then(function(){
			self.reset();
		});
	},
	progress: function() {
		if (this.toDownload === 0) {
			this.log.spinner("Extracting packages");
			this.toDownload = -1;
		}
		if (this.total === this.finished || this.total < 1) return _utils.progressBar(-1);
		if (this.toRespond) {
			this.log.spinner("");
		} else {
			this.log.progress(this.finished/this.total);
		}
	},
	_download: function(download) {
		var self = this;
		return new Promise(function(resolve, reject){
			var len = 0;
			
			if (download.length) {
				self.total += +download.length;
				self.toRespond--;
				self.progress();
			}

			request({
				uri: download.tarball,
				encoding: null
			})
			.on("response", function(res){
				if (!download.length) {
					len = res.headers["content-length"]||0;
					self.total += +len;
					self.toRespond--;
					self.progress();
				}
			})
			.on("data", function(data){
				self.finished += +data.length;
				self.progress();
			})
			.on("end", function(){
				self.toDownload--;
				self.progress();
			})
			.pipe(zlib.createUnzip())
			.pipe(tar.Extract({
				path: download.target,
				strip: 1
			}))
			.on("error", reject)
			.on("end", function(){
				self.log.debug("Extracted " + path.basename(download.tarball) + " to " + path.relative(process.cwd(),download.target));
				self.finished++;
				self.progress();
				resolve();
			});
		});
	},
	
	_makeDownloadArray: function(packages) {
		var self = this;
		return _.map(packages, function(json){
			var url = json.pkg.dist.tarball;
			return {
				tarball: url,
				target: path.resolve(self.root, self.pkgDir, json.name, json.version)
			};
		});
	},
	_sum: function(string) {
		var shasum = crypto.createHash('sha1');
		return shasum.digest("hex");
	}
};

module.exports = Downloader;
