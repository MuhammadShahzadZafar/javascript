// Challenge 1

//function getcelsius(f) {
  //    const celsius = ((f - 32) * 5) / 9;
    //  return celsius;
//}

const getcelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temprature is ${getcelsius(32)} \xB0C `);


// Challenge 2

function minMax (arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{ 
        min,
        max
    };
}

console.log(minMax([1, 2, 3, 4, 5]));


// Challenge 3

((length, width) => {
    const area = length * width;

    const output = `The area of rectangle with a length of ${length} and a width of ${width} is ${area}.`;

    console.log(output);
})(10, 5)