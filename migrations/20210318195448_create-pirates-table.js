
exports.up = function(knex) {
  return knex.schema.createTable('pirates', table => {
    table.increments();
    table.string('name');
    table.boolean('eye_patch');
    table.integer('ship_id').references('id').inTable('ships');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pirates');
};
