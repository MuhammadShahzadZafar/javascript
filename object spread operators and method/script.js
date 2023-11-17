let x;

const todo = new Object();

todo.id = 1;
todo.nmae = 'Buy Milk';
todo.compieted = false;

x = todo;

const person = {
    address: {
        coords: {
        lat: 42.98,
        lng: -71.23,
      },
   },
}

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2};
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup Children from School' },
    { id: 3, name: 'Take out Trash' },
];

x = todos[0] .name;

console.log(x)