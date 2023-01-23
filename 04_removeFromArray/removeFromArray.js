const removeFromArray = function(array,...arg) {
    for ( let i = 0; i < arg.length; i++ ) {
        if (array.includes(arg[i])) {
            array.splice(array.indexOf(arg[i]), 1)
        }
    }
return array ;

};
// arguments zijn array geworden door ... , loping is omdat hij elke keer 1 ding met een keer kan verwijderen via splice, delete laat undefined na, checked dan of de argument
// in de originele array zit, anders returned hij gewoon de array.

// Do not edit below this line
module.exports = removeFromArray;
