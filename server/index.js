'use strict'
var express = require('express')
var app = express() // create the express application
var server = require('http').createServer(app) // create the server

var path = require('path')

app.use(express.static(path.join(__dirname, '../public')))

console.log(path.join(__dirname, '../public'))

app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

if (require.main === module) {
  var port = process.env.PORT || 3001
  server.listen(port, function () {
    console.log('Server is running on port 3001!')
  })
}
