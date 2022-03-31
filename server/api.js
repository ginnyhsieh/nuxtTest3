const express = require('express');
const app = express();

app.get('/test', (req, res) => {
   res.json({ title: 'wayne', message: 'Hello there!'})
})

module.exports = app
