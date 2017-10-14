const Sequelize = require('sequelize');

const sequelize = new Sequelize('zhihu', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


exports.User = sequelize.import('./users');
exports.Answer = sequelize.import('./answers');
exports.Comments = sequelize.import('./comments');
exports.Task = sequelize.import('./tasks');
exports.Question = sequelize.import('./questions');
