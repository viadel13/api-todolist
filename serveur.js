const express = require('express');
const cors = require('cors');
const appRoute = require('./routes/routes.js');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use('/', appRoute);

app.listen(port, ()=>{
    console.log(`le serveur est lance sur le port ${port}`)
})