const sequelize = require(`../config/connection`);
const { user, game, drawing, answer } = require(`../models`);

const userData = [{
        user_name: `Logan`,
        user_password: `123456789`,
        user_email: `logan@gmail.com`
    },
    {
        user_name: `Maria`,
        user_password: `123456789`,
        user_email: `maria@gmail.com`
    },
    {
        user_name: `Thom`,
        user_password: `123456789`,
        user_email: `thom@gmail.com`
    }, {
        user_name: `Vinit`,
        user_password: `123456789`,
        user_email: `vinit@gmail.com`
    }
]

const gameData = [{
    message_id: 0,

}, ]