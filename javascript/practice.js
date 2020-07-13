/*
var a = 5,
  b=2,
  c=3,
  d='hello',
  e = 'goodbye';
  
console.log(d)


function DoSomething(){
  var someVariable = "Hello";
  car = 'goodbye';
  console.log(`${someVariable}   ${car}`);
}

DoSomething();
console.log(car);


function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myscope = outerFunction();

console.log (myscope);
*/

var myArray1 = ["Hello", "Goodbye"];
var myArray2 = [...myArray1, "Tacos"];
var myArray3 = ["Belgrande", ...myArray1];

function loopArray(array)
{
  for(var i = 0; i < array.length; i++)
  {
    console.log(array[i]);
  }
}
/*
console.log("myArray1 values");
loopArray(myArray1);

console.log("myArray2 values");
loopArray(myArray2);

console.log("myArray3 values");
loopArray(myArray3);

let items = [1,2,3,4];
let spliceItems = items.splice(1);

console.log("items values");
loopArray(items);

console.log("spliceItems values");
loopArray(spliceItems);

console.log(Object.keys([1,2,3]));


var myArray4 = [1,2,3];
//myArray4.length = 2;
console.log(myArray4.length);
myArray4.myprop = 'hello';
loopArray(myArray4);
console.log(myArray4.length);

*/

var kittens = [] //define your array here

// Add your functions and code here
kittens = [ 'Milo', 'Otis', 'Garfield'];

var nameglob = "hello";
/*
function appendKitten(name)
{
  var returnArray = [name,...kittens];
  return returnArray;
}

//var kittens2 = appendKitten(nameglob)
*/
function removeLastKitten()
{
  var returnArray = kittens.slice(0, kittens.length-1);
  return returnArray;
}

/*
var kittens2 = removeLastKitten()

console.log("Modified Array");
loopArray(kittens2);

console.log("Original Array");
loopArray(kittens);


kittens.shift();
loopArray(kittens);
*/
//var meals = {}

var meals = {breakfast: "oatmeal" };

function removeItemFromObject(object, item)
{
  delete object.item;
}

removeItemFromObject(meals,breakfast);
console.log(meals.breakfast);

delete meals.breakfast;

console.log(meals.breakfast);
