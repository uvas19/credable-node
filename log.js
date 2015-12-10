module.exports = {
    i: function() {
        console.info.apply(console.info, arguments);
    },
    l: function() {
        console.log.apply(console.log, arguments);
    },
    e: function() {
        console.error.apply(console.error, arguments);
    },
    t: function() { // test (in Mocha, for example)
        console.log.apply(console.log, arguments);
    }
};