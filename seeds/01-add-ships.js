
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        { name: 'hip hip array', badass_level: 10 },
        { name: 'juicy function', badass_level: 9 },
        { name: 'illicit syntax', badass_level: 14 }
      ]);
    });
};
