const email = 'test@test.com';

if (email) {
    console.log('You passed in an email.')
}


console.log(Boolean(email))


const x = false;
if (x) {
    console.log('This is truthy')
}
else {
    console.log('This is falsy')
}


console.log(Boolean(x));


const children = 2;

if (children) {
    console.log(`You have ${children} children`)
}
else {
    console.log('Please enter number of children')
}