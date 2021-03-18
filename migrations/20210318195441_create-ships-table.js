
exports.up = function(knex) {
  return knex.schema.createTable('ships', table => {
    table.increments();
    table.string('name');
    table.integer('badass_level');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ships');
};
