const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require("./controllers");
app.use(allRoutes);



// Start the server
sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
})