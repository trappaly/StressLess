var request = require("request");
var child = require("child_process");
var _ = require("lodash");
var Promise = require("bluebird");

Promise.promisifyAll(request);
Promise.promisifyAll(child);

var lastProgress = "";
var lastSpinner = "";
var spinChars = ["-", "\\", "|", "/"];
var spinIdx = 0;
var spinnerInterval = null;

var _utils = {
	REPO: "http://registry.npmjs.org/",
	get:function(url) {
		return request.getAsync({
			uri: url,
			encoding: null
		})
		.spread(function(res, body){
			if (!res.statusCode === 200) {
				return Promise.reject(body);
			} else {
				return body;
			}
		});
	},
	getJSON: function(url) {
		return _utils.get(url)
		.then(JSON.parse);
	},
	exec: function(cmd,opts) {
		opts = opts||{};
		return child.execAsync(cmd, opts||{})
		.spread(function(stderr,stdout){
			return stdout;
		});
	},
	logLine: function(header, message) {
		_utils.log("[" + header + "] " + message);
	},
	log: function(message) {
		if (process.stdout.isTTY) {
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
		}
		process.stdout.write(message + "\n");
		_utils.progress();
	},
	spinner: function(message,interval) {
		if (!process.stdout.isTTY) return;
		if (message === null) return _utils._endSpinner();
		lastSpinner = message ? message + " " : "";
		_utils._updateSpinner();
		if (!spinnerInterval) {
			spinnerInterval = setInterval(_utils._incrSpinner, interval||200);
		}
	},
	_endSpinner: function() {
		clearInterval(spinnerInterval);
		spinnerInterval = null;
		spinIdx=0;
		_utils.progress("");
	},
	_incrSpinner: function(){
		spinIdx++;
		if (spinIdx >= spinChars.length) spinIdx=0;
		_utils._updateSpinner();
	},
	_updateSpinner: function(){
		_utils.progress(lastSpinner + spinChars[spinIdx]);
	},
	progressBar: function(progress) {
		if (!process.stdout.isTTY) return;
		if (spinnerInterval) {
			_utils.spinner(null);
		}
		if (progress < 0 || progress > 1 || isNaN(progress)) return _utils.progress("");
		
		var barWidth = process.stdout.columns - 8;
		var width = barWidth * progress;
		var len = Math.floor(width);
		var xtra = width - len;
		var percent = Math.floor(progress*100).toString();
		while (percent.length<3) {
			percent = " " + percent;
		}
		
		var str = "";
		for (;len>0;len--) {
			str += "=";
		}
		if (xtra > 0.5) str += "-";
		
		for (var i=str.length;i<barWidth;i++) {
			str += " ";
		}
		
		str = "[" + str + "] " + percent + "%";

		_utils.progress(str);
	},
	progress: function(progressLine){
		if (!process.stdout.isTTY) return;
		if (typeof progressLine !== "undefined") {
			lastProgress = progressLine;
		} else {
			lastProgress = "";
		}
		_utils._drawProgress();
	},
	_drawProgress: function() {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(lastProgress);
	}
};
_utils._drawProgress = _.throttle(_utils._drawProgress, 50);

module.exports = _utils;
