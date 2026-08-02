// 1 reverse a string 

let str ="hello";

let reverse = str.split("").reverse().join("");

console.log(reverse);


// 2 count vowels in a string 



let strr="javascript";
let count = 0;
let vowels="aeiou";

for(let i=0; i<strr.length; i++){
if(vowels.includes(strr[i])){
    count++;
}
}


console.log(count);



// sum of Array of Numbers 

let arr=[1,2,3,4,5];

let sum=0;

for(let i=0; i<arr.length; i++){

    sum+=arr[i];
}
console.log(sum);




// Remove the Duplicates from Array 



let arr=[1,2,3,4,5,6,5];

let unique = [...new Set(arr)];

console.log(unique);







// (4)  Missing   a Number 



let arr=[1,2,3,6];


for(let i=1; i<=6; i++){

if(!arr.includes(i)){
    console.log(i);

}

}












