let assert = require('assert');
let mongoose = require('mongoose');
let Author = require('../models/author');

describe('Nesting records', function() {

    before(function(done) {
        mongoose.connection.collections.authors.drop(function() {
            done();
        });
    });

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

    it('Add a book to the author', function(done) {        
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
                record.books.push({title: "Wise man's fear", pages: "590" });
                record.save().then(function() {
                    Author.findOne({name: "Patrick"}).then(function(record) {
                        assert(record.books.length === 2);
                        done();
                    });
                });                
            });
        });
    });

});
