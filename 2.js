//convert string to 2D array 
let data = 'col1,col2\na,b\nc,d'
//result --> [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]

conv =(data,del = ',')=>{
  const con = data.slice(0,data.indexOf('\n')).split(',')
  return data
}
console.log(data);
