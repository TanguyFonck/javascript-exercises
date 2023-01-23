const repeatString = function(string,num) {
    if (num < 0) {
        return `ERROR`
    }
    else {

    let fullstring = '' // Fullstring die  dus de opgetelde strings gaat samemnbrengen
    for (let i = 0; i < num; i++ ) {
        
        fullstring += string 
    }
    return fullstring
}
};
// Do not edit below this line
module.exports = repeatString;
