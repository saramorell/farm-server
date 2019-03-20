'use strict'

var express = require('express');
const knex = require('../knex')
var router = express.Router();


//get all activities
router.get('/:id/activities', (req, res, next) => {
  return knex('farms')
    .select('id','activities_name' )
    .where('farm.id', req.params.id)
    .join('farm_activities','farm_id')
    .then((activities) => {
      res.status(200).send(activities)
    })
    .catch(err => {
      console.log(err)
    })
  })


//get all activities for each farm
router.get('/', (req, res, next) => {
  return knex('farm')
    .then((farm_activities) => {
      res.status(200).send(farm_activities)
    })
    .catch(err => {
      console.log(err)
    })
  })


module.exports = router;
