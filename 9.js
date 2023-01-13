// Write a program to remove the key-value pairs to the given keys.
input = {
    a : 1,
    b : '2',
    c : 3
}
removekey =['b']

 removekey.forEach((key)=>{
     delete input[key]
})
console.log(input);