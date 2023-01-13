//7. Write a program that will return true if the string is y/yes or false if the string is
//n/no. (regex)
input1 = 'y'
input2 = 'No'

const checkVal = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

console.log(checkVal('y'));
console.log(checkVal('No'));  
console.log(checkVal('vidhi'));
console.log(checkVal('yes'));
console.log(checkVal('n'));
console.log(checkVal('no'));