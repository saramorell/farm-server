'use strict'

var express = require('express');
const knex = require('../knex')
var router = express.Router();


//get all farms
router.get('/', (req, res, next) => {
  return knex('farms')
    .then(async (farms) => {
      const promises = farms.map((farm) => {
        return knex('farm_activities')
        .join('activities', 'farm_activities.activity_id', 'activities.id')
        .where('farm_activities.farm_id', farm.id)
        .then(result => {
          farm.activities = result
          return farm
        })
      })
      let data = await Promise.all(promises)
        res.status(200).send(data)
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
