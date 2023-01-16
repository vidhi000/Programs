//result = 'col1,col2\na,b'

const data = [{ 'col1': 'a', 'col2': 'b' }]

const title = new Set()
// console.log(title);
data.forEach((values)=>{
    for(const key in values){
       title.add(key)
    }
})
console.log(title);

let resStr = [...title].toString().concat("\\n")
// console.log(resStr);

data.forEach((obj)=>{
    let string = '';
    title.forEach((val)=>{
        if(obj[val]){
            string = string + `,${obj[val]}`

        }
        else{
               string += ',-'
        }
        console.log(obj[val]); // a b

    })
    resStr += string
})

console.log(resStr);
