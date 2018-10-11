var problems = [{
    id:1,
    name: "Two Sum ",
    desc: `Given an array of Integers, find two numbers that they add up to a specific target number. The function twoSum should return indices of the two numbers such that they add upto the target.`,
    difficulty:"easy "
    },
    {
        id:2,
        name:"3Sum ",
        desc:`Given an array S of n integers, are there elements a,b,c in S such taht a + b + c = 0?`,
        difficulty:"medium"
    },
    {
        id:3,
        name:"4Sum ",
        desc:`Given an array S of n integers, are there elements a,b,c,d in S such that a + b + c + d = 0`,
        difficulty: "medium "
    }
];

var ProblemModel = require("../models/problemModel");

var getProblems = function(){
    return new Promise((resolve,reject) => {
        ProblemModel.find({},function(err,problems){
            if(err){
                reject(err);

            }else{
                resolve(problems);
            }
        });
    });
}
var getProblem = function(id){
    return new Promise((resolve,reject) => {
        ProblemModel.findOne({id: id},function(err,problem){
            if(err){
                reject(err);
            }

            else{
                resolve(problem);
            }
        });
    });
}
var addProblem = function(newProblem){
    return new Promise((resolve,reject) => {
            ProblemModel.findOne({name : newProblem.name},function(err,problem){
                if(problem)
                    {
                        reject("Problem name already exists");
                    }else{
                        ProblemModel.count({}, function(err,num){
                           newProblem.id = num + 1;
                           var mongoProblem = new ProblemModel(newProblem);
                           mongoProblem.save();
                           resolve(newProblem);
                        });
                    }
                });
            })
}

module.exports = {
    getProblems: getProblems,
    getProblem:getProblem,
    addProblem:addProblem
}