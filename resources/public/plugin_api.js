// provides the method to square a number
var api = {
    square: function(num, cb) {
        // result reported to the callback
        cb(num*num);
    }
}

// exports the api to the application environment
application.setInterface(api);
