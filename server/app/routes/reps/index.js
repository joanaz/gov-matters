'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Rep = require('mongoose').model('Rep');

router.get('/', function(req, res, next) {
  Rep.find().exec()
    .then(function(reps) {
      res.json(reps)
    })
    .then(null, next)
})

router.post('/', function(req, res, next) {
  Rep.create(req.body)
    .then(function(rep) {
      res.status(201).json(rep);
    })
    .then(null, next);
});

router.param('id', function(req, res, next, id) {
  Rep.findById(id).exec()
    .then(function(rep) {
      if (!rep) throw Error('Not Found');
      req.rep = rep;
      next();
    })
    .then(null, function(e) {
      // invalid ids sometimes throw cast error
      if (e.name === "CastError" || e.message === "Not Found") e.status = 404;
      next(e);
    });
});

router.get('/:id', function(req, res) {
  res.json(req.rep)
});

router.put('/:id', function(req, res, next) {
  _.merge(req.rep, req.body);
  req.rep.save()
    .then(function(rep) {
      res.json(rep);
    })
    .then(null, next);
});