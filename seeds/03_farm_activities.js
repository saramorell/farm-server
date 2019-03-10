exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farm_activities').del()
    .then(function() {
      // Inserts seed entries
      return knex('farm_activities').insert([
        {id: 1,
          farm_id: 1,
          activity_id:1,
          activity_id:4,
          activity_id:5,
          activity_id:7,
          activity_id:13}
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('farm_activities_id_seq', (SELECT MAX(id) FROM farm_activities));`
          )
        })
    })
}
