function findFactorial(numbers){
    let factorial = 1;
    for( i = 1; i <=numbers; i++ ){
        factorial = factorial * i;
    }
    return factorial;
}

findFactorial()

console.log(findFactorial(10));