exports.up = function(knex) {
  return knex.schema.createTable('activities', (table) =>{
    table.increments() //id
    table.string('name').notNullable()
    table.string('icon').notNullable()
    table.string('color')

  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('activities')
}
