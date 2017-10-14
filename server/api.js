/**
 * Created by liuxsen on 2017/10/7.
 */

const Router = require('koa-router');

const userController = require('./controller/user');
const questionController = require('./controller/question');
const jwt = require('jsonwebtoken');
const secret = require('./config/index').jwtSecret;

async function isLogin(ctx, next) {
    const token = ctx.header.token;
    if (token && token != null) {
        try {
            const decodedToken = jwt.verify(token, secret);
            ctx.user = decodedToken;
            return next();
        } catch (err) {
            ctx.body = {
                code: 1004,
                msg: 'token is invalid'
            }
        }
    } else {
        ctx.body = {
            code: 1003,
            msg: 'token is null'
        }
    }

}


const api = new Router();


api.post('/user/login', userController.login);
api.post('/user/reg', userController.reg);


api.post('/question/create', isLogin, questionController.create);
api.post('/question/answer', isLogin, questionController.answer);
api.post('/question/list', questionController.list);
api.post('/question/list/:id', questionController.getQuestionAnsers);
api.post('/question/agree/:id',isLogin, questionController.agreeAnswer);


module.exports = api;