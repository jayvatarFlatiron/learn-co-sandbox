const person = {
  name: "Terrance Roberts",
  occupation: {
      title: "District Manager",
      yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}

//console.log(person.occupation.yearsHeld);

const numberCollections = [1, [2, [4, [5, [6]], 3]]]

//console.log(numberCollections[1][1][1][1][0]);

function find(array, criteriaFn)
{
  let current = array
  let next = []
  
  while(current || current ===0)
  {
    if(criteriaFn(current))
      return current;
    
    if(Array.isArray(current))
    {
      for(let i = 0; i < current.length; i++)
      {
        next.push(current[i]);
      }
    }
    
    current = next.shift();
  }
  return null;
}

//var valueToFind = find(numberCollections, example => example > 5);
var valueToFind = find(numberCollections, number => typeof number === 'number' && number > 5);
console.log(valueToFind);

