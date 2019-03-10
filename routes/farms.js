'use strict'

var express = require('express');
const knex = require('../knex')
var router = express.Router();


//get all farms
router.get('/', (req, res, next) => {
  return knex('farms')
    .then((farms) => {
      res.status(200).send(farms)
    })
    .catch(err => {
      console.log(err)
    })
  })

  //get one farm
  router.get('/:id', (req, res, next) => {
    return knex('farms')
    .where('id', req.params.id)
    .then((farms) => {
      res.status(200).send(farms[0])
    })
    .catch(err => {
      console.log(err)
    })
  })


module.exports = router;
