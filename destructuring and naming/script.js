const firstName = 'john';
const lastName = 'doe';
const age = '30';

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
};

console.log(person.age);

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
}

const { id, title, user } = todo;

console.log(user)

const numbers = [23, 45, 67, 78, 99];

const [ first, second, ...rest ] =numbers;

console.log(first, second, rest);