const sequelize = require(`../config/connection`);
const { user, drawing, answer } = require(`../models`);

const userData = [{
        username: `Logan`,
        user_email: `logan@gmail.com`,
        password: `123456789`,
    },
    {
        username: `Maria`,
        user_email: `maria@gmail.com`,
        password: `123456789`,
    },
    {
        username: `Thom`,
        user_email: `thom@gmail.com`,
        password: `123456789`,
    }, {
        username: `Vinit`,
        user_email: `vinit@gmail.com`,
        password: `123456789`,
    }
]

const answerData = [{
        word_content: `Loonie`
    }, {
        word_content: `Toonie`,
    },
    {
        word_content: `Double Double`,
    },
    {
        word_content: `Poutine`,
    },
    {
        word_content: `Timmies`,
    },
    {
        word_content: `Chesterfield`,
    },
    {
        word_content: `Mountie`,
    },
    {
        word_content: `Nanaimo bar`,
    },
    {
        word_content: `Caeser`,
    },
    {
        word_content: `Parka`,
    },
    {
        word_content: `hydro`,
    },
    {
        word_content: `Tuque`,
    },
    {
        word_content: `Toronto`,
    }, {
        word_content: `Snow`,
    },
    {
        word_content: `Thunder Storm`,
    },
    {
        word_content: `Rogers`,
    },
    {
        word_content: `Maple Syrup`,
    },
    {
        word_content: `Ice hockey`,
    },
    {
        word_content: `Niagara Falls`,
    },
    {
        word_content: `CN Tower`,
    },
    {
        word_content: `Vancouver`,
    },
    {
        word_content: `Canadians`,
    },
    {
        word_content: `Tim Hortons`,
    },
    {
        word_content: `Trudeau`,
    },
    {
        word_content: `Polar Bears`,
    },
    {
        word_content: `Eh`,
    },
    {
        word_content: `Timbits`,
    },
    {
        word_content: `Donair`,
    },
    {
        word_content: `Hudson Bay`,
    },
    {
        word_content: `Toronto Raptors`,
    },
    {
        word_content: `Smarties`,
    },
    {
        word_content: `Beaver`,
    },
    {
        word_content: `Curling`,
    },
    {
        word_content: `Lacrosse`,
    },
    {
        word_content: `Pop`,
    },
    {
        word_content: `Garburator`,
    },
    {
        word_content: `Peameal bacon`,
    },
    {
        word_content: `Ketchup Chips`,
    },
    {
        word_content: `Butter Tarts`,
    },
    {
        word_content: `Justin Bieber`,
    }
]