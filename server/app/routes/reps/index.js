'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Rep = require('mongoose').model('Rep');
var http = require('http');

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


router.get('/myrepapi', function(req, res, next) {
  // console.log("hello", req.params.zipcode)
  var options = {
    host: 'www.priceline.com',
    path: '/svcs/ac/index/hotels/ith'
  };

  var callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function(chunk) {
      str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function() {
      console.log(str);
      res.json(str)
    });
  }

  http.request(options, callback).end();

})

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