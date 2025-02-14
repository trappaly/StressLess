var api = {};


["progress", "spinner", "debug", "error", "fatal", "info", "ok"].forEach(function(method){
    api[method] = function(){};
});

module.exports = api;
