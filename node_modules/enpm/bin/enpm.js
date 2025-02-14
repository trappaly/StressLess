#!/usr/bin/env node

var cli = require("commander");
var enpm = require("../lib/enpm");
var fs = require("fs");
var path = require("path");
var _ = require("lodash");
var semver = require("semver");
var colors = require("colors");
var cp = require("child_process");

require("https").globalAgent.maxSockets = 64;
require("http").globalAgent.maxSockets = 64;

var _utils = require("../lib/utils");

var color = {
	"info": "cyan",
	"ok": "green",
	"error": "yellow",
	"fatal": "red"
};
var logger = {
	spinner: _utils.spinner,
	progress: _utils.progressBar
};
_.each(color, function(color, name){
	logger[name] = function(msg) {
		_utils.logLine((name.toUpperCase())[color], msg);
	};
});
logger.debug = function(msg) {
	if (!cli.debug) {
		logger.debug = function(){};
		return;
	}

	_utils.logLine("DEBUG".grey, msg);
}

cli
.version(require("../package").version)
.option("-r, --registry [URL]", "Default registry to use", "https://registry.npmjs.org/")
.option("-r2, --registry2 [URL]", "Fallback registry to use", null)
.option("--save", "Add package do dependencies in package.json", false)
.option("--save-dev", "Add package do devDependencies in package.json", false)
.option("--save-peer", "Add package do peerDependencies in package.json", false)
.option("--download-only", "Do not link packages or dependencies, only download/extract", false)
.option("--debug", "Enable debug output", false);


cli.command("install")
.description("Install packages")
.action(function(){
	setOptions();
	setCwd();
	var pkgs = {};
	if (arguments.length > 1) {
		pkgs = getPackagesFromArgs([].slice.call(arguments,0,-1));
	} else if (fs.existsSync("npm-shrinkwrap.json")) {
		doShrinkwrap()
		.then(triggerRebuild)
		.done();
		return;
	} else {
		pkgs = getPackageJsonDeps();
	}
	enpm.install("node_modules", pkgs)
	.then(function(pkgs){
		return updateDeps(cli, pkgs);
	})
	.then(triggerRebuild)
	.done();
});

cli.command("update")
.description("Like install, but gets latest from the registry")
.action(function(){
	setOptions();
	setCwd();
	var pkgs = {};
	if (arguments.length > 1) {
		pkgs = getPackagesFromArgs([].slice.call(arguments,0,-1));
	} else {
		pkgs = getPackageJsonDeps();
	}
	enpm.update("node_modules", pkgs)
	.then(function(pkgs){
		return updateDeps(cli, pkgs);
	})
	.then(triggerRebuild)
	.done();
});

cli
.command("config <set|get> <option> [value]")
.description("Set or get configuration")
.action(function(action, optionName, optionValue){
	if (action === "get") {
		var prop = optionName.split(".");
		var out = enpm.options[prop[0]];
		if (prop.length>1) {
			out = out ? out[prop[1]] : "";
		}
		console.log(out||"");
	} else if (action === "set") {
		var obj = {};
		var prop = optionName.split(".");
		var val = optionValue;
		if (prop.length > 1) {
			obj[prop[0]] = {};
			obj[prop[0]][prop[1]] = val;
		} else {
			obj[prop[0]] = val;
		}
		enpm.updaterc(obj);
	} else if (action === "unset") {
		enpm.unsetrc(optionName);
	} else {
		cli.error("To use config: enpm config get|set|unset <keyname> <keyvalue>");
		cli.getUsage();
	}
});
cli.parse(process.argv);

function doShrinkwrap() {
	var json = JSON.parse(fs.readFileSync("npm-shrinkwrap.json"));
	logger.info("installing via 'npm-shrinkwrap.json'");
	return enpm.installShrinkwrap("node_modules", json);
}

function triggerRebuild() {
    var proc = cp.spawn("npm", ["rebuild"], {
        stdio: "inherit"
    });
    proc.on("close", function(code) {
        process.exit(code);
    });
}

function setOptions(){
	enpm.setOptions(_.omit(cli, function(opt, key){
		return opt === null;
	}));
	enpm.setOptions({
		logger: logger
	});
	if (cli.downloadOnly) {
		enpm.setOptions({
			link: false
		});
	}
}

function setCwd(dir, search) {
	dir = dir || process.cwd();
	search = search || "package.json";
	if (fs.existsSync(path.join(dir,search))) {
		process.chdir(dir);
	} else {
		var newDir = path.dirname(dir);
		if (newDir !== dir) {
			setCwd(newDir, search);
		} else {
			setCwd(null, "node_modules");
		}
	}
}

function updateDeps(options, packages) {
	if (!fs.existsSync("package.json")) return;

	var json = fs.readFileSync("package.json");
	json = JSON.parse(json);
	if (options["save"]) {
		_.each(packages, function(version, name){
			if (!json.dependencies) json.dependencies = {};
			json.dependencies[name] = "~" + version;
		});
	}
	if (options["save-dev"]) {
		_.each(packages, function(version, name){
			if (!json.devDependencies) json.devDependencies = {};
			json.devDependencies[name] = "~" + version;
		});
	}
	if (options["save-peer"]) {
		_.each(packages, function(version, name){
			if (!json.peerDependencies) json.peerDependencies = {};
			json.peerDependencies[name] = "~" + version;
		});
	}

	fs.writeFileSync("package.json", JSON.stringify(json, null, "  "));
}

function getPackageJsonDeps() {
	var json = JSON.parse(fs.readFileSync("package.json"));
	return _.extend({},
		json.dependencies||{},
		json.devDependencies||{},
		json.peerDependencies||{});
}

function getPackagesFromArgs(argList) {
	var packageMap = {};
	[].forEach.call(argList, function(pkg){
		var split = pkg.split("@");
		packageMap[split[0]] = split[1] || "*";
	});
	return packageMap;
}