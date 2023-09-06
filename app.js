const express = require('express')
const recipes = require('./routes/recipes/api')

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/recipes', recipes)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})