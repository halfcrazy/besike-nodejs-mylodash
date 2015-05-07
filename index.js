function _bind(func, ctx) {
    var self = ctx;

    function inner(arguments) {
        return func.apply(self, arguments)
    }
    return inner;
}

function _once(func) {
    var result;

    function inner() {
        if (result) {
            return result;
        } else {
            result = func();
            return result;
        };
    }
    return inner;
}

function _memoize(func, callback) {
	var cache = {};
	function inner (argument) {
		var key;
		if(callback){
			key = callback(argument);
		}
		else{
			key = argument;
		}
		if(key in cache){
			return cache[key];
		}
		else{
			result = func(argument);
			cache[key] = result;
			return cache[key];
		}
	}
    return inner;
}
var _ = {
    bind: _bind,
    once: _once,
    memoize: _memoize
};

module.exports = _;
