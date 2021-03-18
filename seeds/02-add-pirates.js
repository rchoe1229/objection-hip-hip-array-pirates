
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(function () {
      // Inserts seed entries
      return knex('pirates').insert([
        { name: 'panda say what', eye_patch: true, ship_id: 3 },
        { name: 'choe', eye_patch: true, ship_id: 2 },
        { name: 'katkoin', eye_patch: false, ship_id: 1 }
      ]);
    });
};
