const express = require('express')
const app = express()
const port = 3001

app.use((req, res, next) => {
  console.log(req.headers)
 
  res.status(200)
  res.end()
})

app.listen(port, () => console.log(`Example AuthN/Z App listening on port ${port}!`))
