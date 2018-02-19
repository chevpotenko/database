const assert = require('assert');
const MarioChar = require('../models/MarioChar');

//describe test
describe('Deleting records', function() {
    
    let char;

    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        });
        
        char.save().then(function() {       
            done();
        });
    });

    it('Delet a record from db', function(done) {
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function() {
            MarioChar.findOne({ name: 'Mario' }).then(function(result) {
                assert(result === null);
                done();
            });            
        });
    });
    
})

