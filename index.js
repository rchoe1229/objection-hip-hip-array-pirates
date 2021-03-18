const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
const knex = require("knex");
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = knex(config);
const { Model } = require("objection");

app.use(cors());
app.use(express.json());

Model.knex(database);

class Pirate extends Model {
  static get tableName() {
    return "pirates";
  }
}

class Ship extends Model {
  // static tableName = 'ships'
  static get tableName() {
    return "ships";
  }

  static relationMappings = {
    pirates: {
      relation: Model.HasManyRelation,
      modelClass: Pirate,
      join: {
        from: "ships.id",
        to: "pirates.ship_id",
      },
    },
  };
}

app.get("/ships", (_, response) => {
  Ship.query()
    .withGraphFetched("pirates")
    .then((ships) => response.json({ ships }));
});

app.get("/pirates", (_, response) => {
  Pirate.query()
    // .withGraphFetched("ships")
    .then((pirates) => response.json({ pirates }));
});

app.listen(port, () => console.log(`listening on port ${port}`));
