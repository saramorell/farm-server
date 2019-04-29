exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function() {
      // Inserts seed entries
      return knex('activities').insert([{
            id: 1,
            name: "Tours",
            icon: "t-icon.svg",
            class: "tours"
          },
          {
            id: 2,
            name: "Farm Stand",
            icon: "f-icon.svg",
            class: "farm-stand"
          },
          {
            id: 3,
            name: "On-Farm Sales",
            icon: "o-icon.svg",
            class: "sales",
          },
          {
            id: 4,
            name: "Volunteer Opportunities",
            icon: "v-icon.svg",
            class: "volunteer",
          },
          {
            id: 5,
            name: "Workshops/Classes",
            icon: "w-icon.svg",
            class: "workshops",
          },
          {
            id: 6,
            name: "Farm Dinners",
            icon: "d-icon.svg",
            class: "dinners",
          },
          {
            id: 7,
            name: "Picknicking",
            icon: "p-icon.svg",
            class: "picknicking"
          },
          {
            id: 8,
            name: "Skeins of Wool",
            icon: "s-icon.svg",
            class: "wool"
          },
          {
            id: 9,
            name: "Pumpkin Patch",
            icon: "pp-icon.svg",
            class: "pumpkin"
          },
          {
            id: 10,
            name: "Corn Maze",
            icon: "c-icon.svg",
            class: "corn"
          },
          {
            id: 11,
            name: "Hay Rides",
            icon: "h-icon.svg",
            class: "hay-rides"
          },
          {
            id: 12,
            name: "You-Pick",
            icon: "y-icon.svg",
            class: "you-pick"

          },
          {
            id: 13,
            name: "Animal Interaction",
            icon: "a-icon.svg",
            class: "animals"
          },
          {
            id: 14,
            name: "Chistmas Trees",
            icon: "x-icon.svg",
            class: "x-mas"
          }
        ])
        .then(() => {
          return knex.raw(
            `SELECT setval('activities_id_seq', (SELECT MAX(id) FROM activities));`
          )
        })
    })
}
