'use strict'

var express = require('express');
const knex = require('../knex')
var router = express.Router();


//get all farms
router.get('/', (req, res, next) => {
  return knex('farm_activities')
    .then((farm_activities) => {
      res.status(200).send(farm_activities)
    })
    .catch(err => {
      console.log(err)
    })
  })


module.exports = router;
