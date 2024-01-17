const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./config/connection");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

const allRoutes = require("./controllers");
app.use(allRoutes);
  
  // Start the server
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
})