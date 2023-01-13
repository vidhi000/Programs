// Write a program to replace the names of multiple object keys.
let obj ={
    name : 'JJ',
    job : "Programmer",
    age : 22
}

let renameKey = {
    name : 'firstName',
    job : "Role"
}

const rename = (obj)=>{
    obj.firstName = obj.name
    obj.Role = obj.job
    delete obj.name
    delete obj.job
}

rename(obj)
console.log(obj);
