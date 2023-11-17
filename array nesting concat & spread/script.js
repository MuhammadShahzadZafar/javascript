let x;

const fruits = ['apple', 'peach', 'guava'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries);

x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[0][2];

x = fruits.concat(berries);

//spread operators (...)
 x = [...fruits, ...berries];

//flatten arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

x= Array.isArray(berries);

console.log(x)