var moment = require('moment');

// Jan 1st 1970 00:00:10 am

// var date = moment();
// console.log(date.format('MMM Do YYYY'));

// 10:35 am
// var date = moment();
// console.log(date.format('h:ma'))

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))