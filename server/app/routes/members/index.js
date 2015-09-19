'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var User = require('mongoose').model('User');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

router.get('/', ensureAuthenticated, function(req, res, next) {
    User.find().exec()
        .then(function(users) {
            res.json(users)
        })
        .then(null, next)
})

router.post('/', function(req, res, next) {
    User.create(req.body)
        .then(function(user) {
            res.status(201).json(user);
        })
        .then(null, next);
});

router.param('id', function(req, res, next, id) {
    User.findById(id).exec()
        .then(function(user) {
            if (!user) throw Error('Not Found');
            req.user = user;
            next();
        })
        .then(null, function(e) {
            // invalid ids sometimes throw cast error
            if (e.name === "CastError" || e.message === "Not Found") e.status = 404;
            next(e);
        });
});

router.get('/:id', function(req, res, next) {
    res.json(user)
});

router.put('/:id', function(req, res, next) {
    _.merge(req.user, req.body);
    req.user.save()
        .then(function(user) {
            res.json(user);
        })
        .then(null, next);
});