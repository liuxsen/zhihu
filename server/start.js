/**
 * Created by liuxsen on 2017/10/7.
 */
const port = process.env.PORT || 4000;
console.log(port)

require('babel-register');
const app = require('./app');
app.listen(port);