var temp = {prop1: "hello"};
console.log(temp.prop1);

function deleteFromObjectByKey(object, key)
{
  var returnObject = object;
  delete returnObject[key];
  return returnObject;
}

var temp2 = deleteFromObjectByKey(temp, 'prop1');

console.log(temp.prop1);
console.log(temp2.prop1);
