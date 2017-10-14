//问题 controller
const Question = require('../models').Question;
const Answer = require('../models').Answer;
const comments = require('../models').Comments;


async function create (ctx,next){
    const qTitle = ctx.request.body.title;
    const con = ctx.request.body.con;
    const createAt = ctx.request.body.createAt;
    const type = ctx.request.body.type;

    const newQuestion = Question.build({
        title: qTitle,
        con: con,
        createAt: createAt,
        type: type,
        uid: ctx.user.id
    });

    let question = await newQuestion.save();
    question = question.get({plain:true});
    ctx.response.body = question;
    console.log(ctx.response)
}


/**
 * 列出所有的问题
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
async function list (ctx,next) {
    const questions = await Question.findAll();
    ctx.body = questions;
}

// * 回答一个问题
async function answer (ctx,next){
  const questionId = ctx.request.body.questionId,
      createAt = ctx.request.body.createAt,
      con= ctx.request.body.con;
  const newAnswer = Answer.build({
      questionId:questionId,
      createAt: createAt,
      con: con,
      uId: ctx.user.id
  });
  const answer = await newAnswer.save();
  ctx.response.body = {
      code: 0,
      msg: 'answer the question is ok'
  }
}

//查询问题，并且返回问题的答案
async function getQuestionAnsers (ctx,next) {
    const questionId = ctx.params.id;
    Question.hasMany(Answer);
    const question = await Question.findAll({
        include: [Answer],
        where:{
            id: questionId
        }
    });
    ctx.response.body = question;
}

//赞同一个答案
async function agreeAnswer (ctx,next) {
    const answerId = ctx.params.id;
    const agreeStatus = ctx.request.body.agreeStatus*1;

    const answer = await Answer.findById(answerId);
    if(agreeStatus === 0){
        ++answer.trample;
    }else if(agreeStatus === 1){
        ++answer.agreeNum;
    }else{
        ctx.response.body = {
            code: 1004,
            msg: 'agreeStatus is be null'
        }
    }
    await answer.save();
    ctx.response.body = {
        code: 0
    }
}




module.exports = {create,answer,list,getQuestionAnsers,agreeAnswer};



