const mocha = require('mocha');
const mongoose = require('mongoose');

//connect to the db before test run
//before() mocha hook

before(function(done) {        
    //connect to mongo db
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function() {
        console.log('Connection has been made, now make fireworks');
        done();
    }).on('error', function(error) {
        console.log('connection error:', error);
    });
});

//drop the characters  collections before each test
beforeEach(function(done) {
    mongoose.connection.collections.mariochars.drop(function() {
        done();
    });
});