exports.up = function(knex) {
  return knex.schema.createTable('farm_activities', (table) =>{
    table.increments() //id
    table.integer('farm_id').references('id').inTable('farms').notNull().onDelete('cascade')
    table.integer('activity_id').references('id').inTable('activities').notNull().onDelete('cascade')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('farm_activities')
}
