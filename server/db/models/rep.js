'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    jobTitle: {
        type: String
    },
    phone: {
        type: String
    },
    fax: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String 
    }
});

mongoose.model('Rep', schema);