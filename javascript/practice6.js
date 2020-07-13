//const myFunctions = require('./exportModules');
//console.log(myFunctions.tutorials());

const myFunctions = require('./exportModules');

let myfunc = myFunctions.exportPractice;

console.log(myFunctions.exportPractice());
console.log(myfunc());


function ExecuteAFunction(functionToExecute)
{
  console.log("Inside ExecuteAFunction");
  console.log(functionToExecute());
  
}

ExecuteAFunction(myfunc);
