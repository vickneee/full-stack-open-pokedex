/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8081

// serve the static files from the dist directory

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
