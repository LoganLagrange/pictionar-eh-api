const sequelize = require(`../config/connection`);
const { User, Drawing, Answer } = require(`../models`);

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
        word: `Loonie`
    }, {
        word: `Toonie`,
    },
    {
        word: `Double Double`,
    },
    {
        word: `Poutine`,
    },
    {
        word: `Timmies`,
    },
    {
        word: `Chesterfield`,
    },
    {
        word: `Mountie`,
    },
    {
        word: `Nanaimo bar`,
    },
    {
        word: `Caeser`,
    },
    {
        word: `Parka`,
    },
    {
        word: `hydro`,
    },
    {
        word: `Tuque`,
    },
    {
        word: `Toronto`,
    }, {
        word: `Snow`,
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

    const dbUsers = await User.bulkCreate(userData, {
        individualHoooks: true
    });
    console.table(dbUsers.map(User => User.toJSON()));

    const dbAnswer = await Answer.bulkCreate(answerData);
    console.table(dbAnswer.map(Answer => Answer.toJSON()));

    const dbDrawing = await Drawing.bulkCreate(drawingData);
    console.table(dbDrawing.map(Drawing => Drawing.toJSON()));

    await dbUsers[0].addDrawing
    process.exit(0);
}

seedData();