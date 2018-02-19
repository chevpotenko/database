const assert = require('assert');
const MarioChar = require('../models/MarioChar');

//describe test
describe('Updating records', function() {
    
    let char;

    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        });
        
        char.save().then(function() {       
            done();
        });
    });

    it('Update a record from db', function(done) {
        MarioChar.findOneAndUpdate({name: 'Mario'}, { name: 'Luigi' }).then(function() {
            MarioChar.findOne({ _id: char._id }).then(function(result) {
                assert(result.name === 'Luigi');
                done();
            });            
        });
    });
    
})

