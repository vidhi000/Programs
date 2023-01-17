let input = [10,0,23,18,15,20]

input.forEach((number)=>{
let val ;
if(number === 0  || number === 12)
    val = `${number} => 12 ${number === 0? "AM" : "PM"}`
else{
    val = `${number} => ${number%12} ${number < 12 ? "AM" : "PM"}`
}
console.log(val);

})



