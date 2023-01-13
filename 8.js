//result --> [{"name":"barney","age":36},{"name":"fred","age":48},{"name":"fred","age":40}]
input = [
    {name : 'fred',age : 48},
    {name : 'barney',age : 36},
    {name : 'fred',age : 40},
]

const orders = ['asc','desc']
const res = input.sort((ele,val)=>{
     const a = ele.name.toUpperCase();
     const b = val.name.toUpperCase()

     if(a>b){
         return orders[0] === "asc"? 1 : -1
     }
    else  if(a<b){
        return orders[0] === "asc"? -1 : 1
     }
     else if(a===b){
        if(a.age < b.age) return orders[1] === "desc"?-1 : 1
        else if(a.age>b.age) return orders[1] === "desc"?1 : -1
     }
     
})
console.log(input);

