var array1 = ['one', 'two'];
var string1 = "myString";

function loopArray(array)
{
  for(let i = 0; i <= array.length-1; i++)
  {
    console.log(array[i]);
  }
}

function test(input)
{
  input = input + 'hello';
}

function test2(input)
{
  input.push('hello');
}

test(string1);

console.log(string1);

test2(array1);

loopArray(array1);
