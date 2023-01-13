obj1 = {
    hair : "long",
    beard : true
}
obj2 = {
    beard : false,
    hair : "long",

}

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

obj1 = Object.entries(obj1)
obj2 = Object.entries(obj2)
// console.log(obj1);

if(obj1.length === obj2.length){
    obj1.forEach((i)=>{
      obj1[i] = String(obj1[i])
      obj2[i] = String(obj2[i])
     })

     const res = obj1.every((val)=>{
        return obj2.includes(val)
     })
     console.log(res);
}
else{
    return false
}
