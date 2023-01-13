
let arr = [1,2]
//result --> [[],[1],[2],[2,1]]

const res = (arr)=>{
   return arr.reduce((a,b)=>
    a.concat(a.map(item => [b].concat(item))),[[]])
}
console.log(res([1,2]));


