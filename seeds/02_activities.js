exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([{
            id: 1,
            name: "Tours",
            icon: "t-icon.png"
          },
          {
            id: 2,
            name: "Farm Stand",
            icon: "f-icon.png"
          },
          {
            id: 3,
            name: "On-Farm Sales",
            icon: "o-icon.png"
          },
          {
            id: 4,
            name: "Volunteer Opportunities",
            icon: "v-icon.png"
          },
          {
            id: 5,
            name: "Workshops/Classes",
            icon: "w-icon.png"
          },
          {
            id: 6,
            name: "Farm Dinners",
            icon: "d-icon.png"
          },
          {
            id: 7,
            name: "Picknicking",
            icon: "p-icon.png"
          },
          {
            id: 8,
            name: "Skeins of Wool",
            icon: "s-icon.png"
          },
          {
            id: 9,
            name: "Pumpkin Patch",
            icon: "pp-icon.png"
          },
          {
            id: 10,
            name: "Corn Maze",
            icon: "c-icon.png"
          },
          {
            id: 11,
            name: "Hay Rides",
            icon: "h-icon.png"
          },
          {
            id: 12,
            name: "You-Pick",
            icon: "y-icon.png"
          },
          {
            id: 13,
            name: "Animal Interaction",
            icon: "a-icon.png"
          },
          {
            id: 14,
            name: "Chistmas Trees",
            icon: "x-icon.png"
          }
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('activities_id_seq', (SELECT MAX(id) FROM activities));`
          )
        })
    })
}
