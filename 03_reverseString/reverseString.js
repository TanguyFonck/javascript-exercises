const reverseString = function(string) {
const myarray = string.split('') // van string naar array omdat ik enkel zo de characters makkelijk kan verwisselen van plaats, en dus de string enkel zo achterstevoren kan laten schrijven.
let reversearray = myarray.reverse('')
let result = reversearray.join('')
// console.log(myarray)
// console.log(reversearray)
// console.log(result)
return result
}; 

// Do not edit below this line
module.exports = reverseString;
