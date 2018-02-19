let assert = require('assert');
let mongoose = require('mongoose');
let Author = require('../models/author');

describe('Nesting records', function() {
    it('creates author', function(done) {
        
        let pat = new Author({
            name: 'Patrick',
            books: [
                {
                    title: 'Name of the Wind',
                    pages: 500
                }
            ]
        });

        pat.save().then(function() {
            Author.findOne({ name: 'Patrick' }).then(function(record) {
                assert(record.books.length === 1);
                done();
            });
        });

    });
});
