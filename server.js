const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./config/connection");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

const allRoutes = require("./controllers");
app.use(allRoutes);

app.use(express.json());

// Start the server
sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
})