exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farm_activities').del()
    .then(function() {
      // Inserts seed entries
      return knex('farm_activities').insert([{
            id: 1,
            farm_id: 1,
            activity_id: 1
          },
          {
            id: 2,
            farm_id: 1,
            activity_id: 4
          },
          {
            id: 3,
            farm_id: 1,
            activity_id: 5
          },
          {
            id: 4,
            farm_id: 1,
            activity_id: 7
          },
          {
            id: 5,
            farm_id: 2,
            activity_id: 2
          },
          {
            id: 6,
            farm_id: 2,
            activity_id: 3
          },
          {
            id: 7,
            farm_id: 2,
            activity_id: 6
          },
          {
            id: 8,
            farm_id: 2,
            activity_id: 9
          },
          {
            id: 9,
            farm_id: 3,
            activity_id: 1
          },
          {
            id: 10,
            farm_id: 3,
            activity_id: 6
          },
          {
            id: 11,
            farm_id: 6,
            activity_id: 1
          },
          {
            id: 12,
            farm_id: 6,
            activity_id: 2
          },
          {
            id: 13,
            farm_id: 6,
            activity_id: 4
          },
          {
            id: 14,
            farm_id: 6,
            activity_id: 5
          },
          {
            id: 15,
            farm_id: 6,
            activity_id: 6
          },
          {
            id: 16,
            farm_id: 6,
            activity_id: 8
          },
          {
            id: 17,
            farm_id: 7,
            activity_id: 1
          },
          {
            id: 18,
            farm_id: 8,
            activity_id: 4
          },
          {
            id: 19,
            farm_id: 8,
            activity_id: 5
          },
          {
            id: 20,
            farm_id: 8,
            activity_id: 6
          },
          {
            id: 21,
            farm_id: 8,
            activity_id: 9
          },
          {
            id: 22,
            farm_id: 9,
            activity_id: 1
          },
          {
            id: 23,
            farm_id: 9,
            activity_id: 2
          },
          {
            id: 24,
            farm_id: 9,
            activity_id: 3
          },
          {
            id: 25,
            farm_id: 9,
            activity_id: 4
          },
          {
            id: 26,
            farm_id: 9,
            activity_id: 7
          },
          {
            id: 27,
            farm_id: 9,
            activity_id: 12
          },
          {
            id: 28,
            farm_id: 10,
            activity_id: 1
          },
          {
            id: 29,
            farm_id: 10,
            activity_id: 2
          },
          {
            id: 30,
            farm_id: 10,
            activity_id: 3
          },
          {
            id: 31,
            farm_id: 10,
            activity_id: 4
          },
          {
            id: 32,
            farm_id: 10,
            activity_id: 5
          },
          {
            id: 33,
            farm_id: 10,
            activity_id: 6
          },
          {
            id: 34,
            farm_id: 10,
            activity_id: 7
          },
          {
            id: 35,
            farm_id: 10,
            activity_id: 12
          },
          {
            id: 36,
            farm_id: 10,
            activity_id: 13
          },
          {
            id: 37,
            farm_id: 11,
            activity_id: 1
          },
          {
            id: 38,
            farm_id: 11,
            activity_id: 3
          },
          {
            id: 39,
            farm_id: 11,
            activity_id: 12
          },
          {
            id: 40,
            farm_id: 12,
            activity_id: 1
          },
          {
            id: 41,
            farm_id: 12,
            activity_id: 4
          },
          {
            id: 42,
            farm_id: 12,
            activity_id: 5
          },
          {
            id: 43,
            farm_id: 12,
            activity_id: 6
          },
          {
            id: 44,
            farm_id: 12,
            activity_id: 7
          },
          {
            id: 45,
            farm_id: 13,
            activity_id: 1
          },
          {
            id: 46,
            farm_id: 13,
            activity_id: 3
          },
          {
            id: 47,
            farm_id: 13,
            activity_id: 4
          },
          {
            id: 48,
            farm_id: 13,
            activity_id: 5
          },
          {
            id: 49,
            farm_id: 13,
            activity_id: 13
          },
          {
            id: 50,
            farm_id: 14,
            activity_id: 2
          },
          {
            id: 51,
            farm_id: 14,
            activity_id: 3
          },
          {
            id: 52,
            farm_id: 14,
            activity_id: 9
          },
          {
            id: 53,
            farm_id: 14,
            activity_id: 10
          },
          {
            id: 54,
            farm_id: 14,
            activity_id: 11
          },
          {
            id: 55,
            farm_id: 14,
            activity_id: 14
          },
          {
            id: 56,
            farm_id: 15,
            activity_id: 1
          },
          {
            id: 57,
            farm_id: 15,
            activity_id: 2
          },
          {
            id: 58,
            farm_id: 15,
            activity_id: 3
          },
          {
            id: 59,
            farm_id: 15,
            activity_id: 5
          },
          {
            id: 60,
            farm_id: 15,
            activity_id: 6
          },
          {
            id: 61,
            farm_id: 15,
            activity_id: 9
          },
          {
            id: 62,
            farm_id: 15,
            activity_id: 12
          },
          {
            id: 63,
            farm_id: 17,
            activity_id: 1
          },
          {
            id: 64,
            farm_id: 17,
            activity_id: 4
          },
          {
            id: 65,
            farm_id: 17,
            activity_id: 6
          },
          {
            id: 66,
            farm_id: 18,
            activity_id: 1
          },
          {
            id: 67,
            farm_id: 18,
            activity_id: 4
          },
          {
            id: 68,
            farm_id: 18,
            activity_id: 5
          },
          {
            id: 69,
            farm_id: 18,
            activity_id: 6
          },
          {
            id: 70,
            farm_id: 18,
            activity_id: 13
          },
          {
            id: 71,
            farm_id: 19,
            activity_id: 1
          },
          {
            id: 72,
            farm_id: 19,
            activity_id: 2
          },
          {
            id: 73,
            farm_id: 19,
            activity_id: 3
          },
          {
            id: 74,
            farm_id: 19,
            activity_id: 7
          },
          {
            id: 75,
            farm_id: 19,
            activity_id: 9
          },
          {
            id: 76,
            farm_id: 19,
            activity_id: 10
          },
          {
            id: 77,
            farm_id: 19,
            activity_id: 11
          },
          {
            id: 78,
            farm_id: 19,
            activity_id: 12
          },
          {
            id: 79,
            farm_id: 19,
            activity_id: 13
          },
          {
            id: 80,
            farm_id: 20,
            activity_id: 1
          },
          {
            id: 81,
            farm_id: 20,
            activity_id: 6
          },
          {
            id: 82,
            farm_id: 21,
            activity_id: 1
          },
          {
            id: 83,
            farm_id: 21,
            activity_id: 2
          },
          {
            id: 84,
            farm_id: 21,
            activity_id: 3
          },
          {
            id: 85,
            farm_id: 21,
            activity_id: 5
          },
          {
            id: 86,
            farm_id: 21,
            activity_id: 6
          },
          {
            id: 87,
            farm_id: 21,
            activity_id: 13
          },
          {
            id: 88,
            farm_id: 1,
            activity_id: 13
          }
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('farm_activities_id_seq', (SELECT MAX(id) FROM farm_activities));`
          )
        })
    })
}
