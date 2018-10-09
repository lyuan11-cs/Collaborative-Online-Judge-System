import { Problem } from "./models/problem.model";

export const PROBLEMS: Problem[] = [{
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