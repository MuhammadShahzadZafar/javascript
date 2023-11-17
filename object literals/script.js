let x;
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 main street',
        city: 'karachi',
        country: 'Pakistan',
    },
    hobbies: ['music', 'reading'],
};

x = person.name;
x = person.address.country;
x = person.hobbies[0];

person.name = 'jane doe';
x = person;


console.log(x);