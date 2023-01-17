
let arr = [1,2]
//result --> [[],[1],[2],[2,1]]

const res = (arr)=>{
   return arr.reduce((a,b)=>
    a.concat(a.map(item => [b].concat(item))),[[]])
}
console.log(res([1,2]));


//[[]] --> arr with empty sub-arr
//a = []
//[b] = 1
//a.map(item => [b].concat(item)) // [[],[1]] or [1]
//a.concat([1],[[]]) // [[],[1]]




