const numbers = [3,4,5,6,7,8,9];
// const multi = [];
// for(let i = 0; i < numbers.length; i++){
//     const element  = numbers[i];
//     const result = element * element;
//     multi.push(result);
// }

// console.log(multi);

// numbers.map((element, index, array)=>{
//     console.log(`Element is ${element}
//     Index is ${index}
//     Array is ${array}
//     `)
// })

const getFilter = numbers.filter((element)=>{
   return element * 4; 
});

console.log(getFilter);

const getFind = numbers.find((element)=>{
    return element > 4; 
 });
 
 console.log(getFind);