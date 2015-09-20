'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    image: {
        type: String
    }
});

mongoose.model('Rep', schema);