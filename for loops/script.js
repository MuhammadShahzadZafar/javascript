for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number')
    }
    else{
        console.log('Number ' + i)     
    }
}


// nest loop

for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i)


    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}