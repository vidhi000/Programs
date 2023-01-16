// let input = 'col1,col2\na,b\nc,d'

const convert = (input) => {
    const title = input.slice(0,input.indexOf('\n')).split(',')         //first title seprate

   // return title   //[col1,col2]

     return input.slice(input.indexOf('\n')+1).split('\n').map(val=>{
      const items =  val.split(',')
       //  return items      //[ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
      return title.reduce((obj,title,idx)=>((obj[title] = items[idx]),obj),{})
     })

        }

console.log(convert('col1,col2\na,b\nc,d\ne,f'));
