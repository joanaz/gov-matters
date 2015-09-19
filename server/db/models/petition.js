'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    numOfSupporters: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    rep: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rep'
    }
});

mongoose.model('Petition', schema);