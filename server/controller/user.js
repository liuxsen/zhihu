/**
 * Created by liuxsen on 2017/10/7.
 */
const User = require('../models').User;
const jwt = require('jsonwebtoken');
//var decoded = jwt.verify(token, secret);

const secret = require('../config/index').jwtSecret;

async function login (ctx, next)  {
    const {request,response} = ctx;
    const phone = request.body.phone,
        password = request.body.password;
    let user = await User.findOne({
        where:{
            phone: phone
        },
        attributes:{
            // exclude:['password']
        }
    });
    if(user == null){
        ctx.body = {
            code: 1001,
            msg: '用户不存在'
        }
    }else{
        user = user.get({plain:true});
        if(password !== user.password){
            ctx.body={
                code: 1002,
                msg: '密码错误'
            }
        }else{
            const token = jwt.sign(user,secret,{expiresIn:'2days'});
            console.log(token);
            delete user.password;
            console.log(user)
            ctx.body = {
                code: 0,
                user: user,
                token: token
            }
        }
    }
}


async function reg (ctx,next){
    const {request,response} = ctx;
    const phone = request.body.phone,
        password = request.body.password;
    const user = await User.findOne({
        where:{
            phone: phone
        }
    });
    console.log(user);
    if(user !== null){
        //    如果已经存在用户
        ctx.body = {
            code: 1002,
            msg: '用户已经存在,不能重复注册'
        }
    }else{
        const newUser = User.build({
            phone: phone,
            password: password
        });
        let user = await newUser.save();
        user = user.get({plain: true});
        const token = jwt.sign(user,secret,{expiresIn:'2days'});
        delete user.password;

        ctx.body = {
            code: 0,
            user: user,
            token: token
        }
    }
}

module.exports = {login,reg};