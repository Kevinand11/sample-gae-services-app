const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const project = 'App3'

app.get('/', (req, res) => {
  res.json({ message: `Hello World From ${project}!`, date: Date.now() })
})

app.listen(port, () => {
  console.log(`${project} listening at http://localhost:${port}`)
})