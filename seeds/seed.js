const sequelize = require(`../config/connection`);
const { user, drawing, answer } = require(`../models`);

const userData = [{
        username: `Logan`,
        password: `123456789`,
        email: `logan@gmail.com`,
    },
    {
        username: `Maria`,
        password: `123456789`,
        email: `maria@gmail.com`,
    },
    {
        username: `Thom`,
        password: `123456789`,
        email: `thom@gmail.com`,
    }, {
        username: `Vinit`,
        password: `123456789`,
        email: `vinit@gmail.com`,
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

const drawingData = [{
        filename: "test1.svg",
    },
    {
        filename: "test2.svg",
    },
    {
        filename: "test3.svg",
    },
    {
        filename: "test4.svg",
    }
]

const seedData = async() => {
    await sequelize.sync({ force: true });

    const dbUsers = await user.bulkCreate(userData, {
        individualHoooks: true
    });
    console.table(dbUsers.map(user => user.toJSON()));

    const dbAnswer = await answer.bulkCreate(answerData);
    console.table(dbAnswer.map(answer => answer.toJSON()));

    const dbDrawing = await drawing.bulkCreate(drawingData);
    console.table(dbDrawing.map(drawing => drawing.toJSON()));

    process.exit(0);
}

seedData();
git