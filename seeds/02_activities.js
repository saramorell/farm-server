exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([{
            id: 1,
            name: "Tours",
            icon: "t-icon.svg"
          },
          {
            id: 2,
            name: "Farm Stand",
            icon: "f-icon.svg"
          },
          {
            id: 3,
            name: "On-Farm Sales",
            icon: "o-icon.svg"
          },
          {
            id: 4,
            name: "Volunteer Opportunities",
            icon: "v-icon.svg"
          },
          {
            id: 5,
            name: "Workshops/Classes",
            icon: "w-icon.svg"
          },
          {
            id: 6,
            name: "Farm Dinners",
            icon: "d-icon.svg"
          },
          {
            id: 7,
            name: "Picknicking",
            icon: "p-icon.svg"
          },
          {
            id: 8,
            name: "Skeins of Wool",
            icon: "s-icon.svg"
          },
          {
            id: 9,
            name: "Pumpkin Patch",
            icon: "pp-icon.svg"
          },
          {
            id: 10,
            name: "Corn Maze",
            icon: "c-icon.svg"
          },
          {
            id: 11,
            name: "Hay Rides",
            icon: "h-icon.svg"
          },
          {
            id: 12,
            name: "You-Pick",
            icon: "y-icon.svg"
          },
          {
            id: 13,
            name: "Animal Interaction",
            icon: "a-icon.svg"
          },
          {
            id: 14,
            name: "Chistmas Trees",
            icon: "x-icon.svg"
          }
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('activities_id_seq', (SELECT MAX(id) FROM activities));`
          )
        })
    })
}
