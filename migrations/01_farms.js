exports.up = function(knex) {
  return knex.schema.createTable('farms', (table) =>{
    table.increments() //id
    table.string('name').notNullable()
    table.string('location').notNullable()
    table.string('contact').notNullable()
    table.string('website')
    table.text('description').notNullable()
    table.string('img').notNullable()
    table.decimal('lat', 'null').notNullable()
    table.decimal('lng', 'null').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('farms')
}
