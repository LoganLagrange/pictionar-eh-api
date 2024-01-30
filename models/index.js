const User = require("./User");
const Drawing = require("./Drawing");
const Answer = require("./Answer");

// Drawing to User associations
Drawing.belongsTo(User, {
    onDelete: "CASCADE"
});
User.hasMany(Drawing);

// Drawing to Answer associations
Drawing.belongsTo(Answer, {
    onDelete: "CASCADE"
});
Answer.hasMany(Drawing);

// User friend association
User.belongsToMany(User, {
    through: "Friendship",
    as: "Friends",
    foreignKey: "UserId",
    otherKey: "FriendId"
})

module.exports = {
    User,
    Drawing,
    Answer
}
