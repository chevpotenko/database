const assert = require('assert');
const MarioChar = require('../models/MarioChar');

//describe test
describe('Saving records', function() {
    
    // create test  
    it('Saves a records to the db', function(done) {
        let char = new MarioChar({
            name: 'Mario'
        });
        
        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

})

