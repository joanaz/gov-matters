'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Petition = require('mongoose').model('Petition');

router.get('/', function(req, res, next) {
  Petition.find().exec()
    .then(function(petitions) {
      res.json(petitions)
    })
    .then(null, next)
})

router.post('/', function(req, res, next) {
  Petition.create(req.body)
    .then(function(petition) {
      res.status(201).json(petition);
    })
    .then(null, next);
});

router.param('id', function(req, res, next, id) {
  Petition.findById(id)
    .populate('rep')
    .exec()
    .then(function(petition) {
      if (!petition) throw Error('Not Found');
      req.petition = petition;
      next();
    })
    .then(null, function(e) {
      // invalid ids sometimes throw cast error
      if (e.name === "CastError" || e.message === "Not Found") e.status = 404;
      next(e);
    });
});

router.get('/:id', function(req, res, next) {
  res.json(petition)
});

router.put('/:id', function(req, res, next) {
  _.merge(req.petition, req.body);
  req.petition.save()
    .then(function(petition) {
      res.json(petition);
    })
    .then(null, next);
});