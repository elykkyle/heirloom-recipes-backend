const express = require("express")
const router = express.Router()
const pg = require("pg")



const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "heirloom-app",
  password: "postgress",
  port: 5432,
})

router.get("/search", async function(req, res) {
  console.log("recipe search");

  const {rows} = await pool.query(`
    SELECT DISTINCT ON (r.recipe_id)
      r.recipe_id, r.title, COALESCE(rp.url, 'default.jpg') AS url
    FROM
      recipes r
    LEFT JOIN
      recipes_photos rp
    ON
      r.recipe_id = rp.recipe_id
  `)

  res.json({rows})
})

module.exports = router