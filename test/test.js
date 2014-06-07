var test = require("tape");
var lib = require("../lib/byte-size");

test("first", function(t){
    t.equal(lib(10000), "10 KB");
    t.equal(lib(10000, 1), "9.8 KB");
    t.equal(lib(10000, 2), "9.77 KB");
    t.equal(lib(10000, 3), "9.766 KB");
    t.end();
});
