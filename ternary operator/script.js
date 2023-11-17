const age = 19;


if (age >= 18) {
    console.log('You can vote!')
}
else {
    console.log('You can not vote!')
}

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!')

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote!';




console.log(canVote)
console.log(canVote2)


const auth = false;

const redirect = auth ? (alert('Welcome to dashboard'), '/dashboard') : (alert('Access Denied'), '/login')