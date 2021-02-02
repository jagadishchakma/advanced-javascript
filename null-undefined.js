const name = "";
if(name == null){
    console.log("Name is null");
}else{
    console.log("name");
}

// undefined one

let gf;
console.log(gf);

// undefined two

function person() {
    console.log("Hello");
}

const result = person();

console.log(result);

// undefined three
function sum(one, two){
    return one +" " + two;
}
const summation = sum(12);
console.log(summation);

// undefined four
const numbers = [2,3,4,5];

console.log(numbers[12]);