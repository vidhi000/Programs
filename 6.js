// Write a program to filter out the unique values in an array.
//print unique value
input = [1,2,2,3,4,4,5]

const res = input.filter((val,i)=>{
   return input.indexOf(val) === input.lastIndexOf(val)
})
console.log(res);



//using for loop
let arr = [1,2,2,3,4,4,5]
let unique = []

for(let i = 0;i<arr.length;i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        unique.push(arr[i])
    }
}
console.log(unique);