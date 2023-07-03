exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('vin', 17).notNullable().unique()
    tbl.sting('make', 128).notNullable()
    tbl.sting('model', 128).notNullable()
    tbl.numeric('mileage').unsigned().notNullable()
    tbl.sting('title', 128)
    tbl.sting('transmission', 128)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
