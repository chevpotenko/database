const assert = require('assert');
const MarioChar = require('../models/MarioChar');

//describe test
describe('Finding records', function() {
    
    let char;

    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        });
        
        char.save().then(function() {       
            done();
        });
    });

    it('Finding a record from db', function(done) {
        MarioChar.findOne({ name: 'Mario' }).then(function(result) {
            assert(result.name === 'Mario');
            done();
        });
    });

    it('Finding a record by ID from db', function(done) {
        MarioChar.findOne({ _id: char._id }).then(function(result) {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
    
})

