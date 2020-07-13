var meals = {breakfast: "eggs"};
var keys = Object.keys(meals);

function removeItemFromObject(object,item)
{
  console.log(`Inside removeFunction ${item}`);
  delete object[item];
  return object;
}

meals = removeItemFromObject(meals,'breakfast');

console.log("ModifiedMeals");
console.log(meals.breakfast);

meals = {breakfast: "eggs"};

//meals = removeItemFromObject(meals,Object.keys(Object.assign({},{meals.breakfast: "eggs"}))[0]);

meals = removeItemFromObject(meals, keys[0]);

console.log("2nd ModifiedMeals");
console.log(meals.breakfast);


