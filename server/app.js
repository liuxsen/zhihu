/**
 * Created by liuxsen on 2017/10/7.
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const api = require('./api');




app
    .use(bodyParser())
    .use(api.routes())
    .use(api.allowedMethods());

module.exports = app;




