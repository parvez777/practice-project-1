
// Multiple Even Odd fuction Array======================

let age = [15, 44, 784, 25, 13, 555, 496, 19, 73];
let age2 = [14, 36, 157, 463, 751, 55, 32, 74, 44, 67, 89, 78];
let age3 = [15, 45, 974, 745, 35, 54, 44, 68, 19, 73,];

function evenOdd(numbers){
    let even = [];
    let odd = [];
    for( let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            even.push(numbers[i])
        }
        else{
            odd.push(numbers[i])
        }
    }
    console.log('Even Numbers', even);
    console.log('Odd Numbers', odd);
}

evenOdd(age3)