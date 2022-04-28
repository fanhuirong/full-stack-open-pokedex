const express = require('express')
require('dotenv').config()
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.listen(PORT, () => {
})
