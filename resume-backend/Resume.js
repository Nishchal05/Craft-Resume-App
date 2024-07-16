const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeSchema = new Schema({
  name: String,
  email: String,
  mobileNo: String,
  LinkedIn: String,
  orgname: String,
  degree: String,
  orgTimePeriod: String,
  skill: String,
  orgExperience: String,
  domain: String,
  experiencedetail: String,
  expTimeperiod: String,
  orgExperience1: String,
  domain1: String,
  experiencedetail1: String,
  expTimeperiod1: String,
  Projectname: String,
  stack: String,
  projecturl: String,
  projectlearn: String,
  Projectname1: String,
  stack1: String,
  projecturl1: String,
  projectlearn1: String,
  userid:String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resumedata', resumeSchema);