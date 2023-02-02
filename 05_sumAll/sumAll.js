const sumAll = function(a,b) {
   
    if ( a < 0 || b < 0 ) {
        return `ERROR`
    }
    else if (typeof a !== "number" || typeof b !== "number") {
        return `ERROR`
    }
    else {
        if ( a < b) {
            let sum = 0
            for ( i = a ; i <= b; i++)
            sum += i
            return sum

        }

        if (b < a) {
            let sum = 0
            for ( i = b ; i <= a; i++)
            sum += i
            return sum
        }


    }
    }



// maak array van [begin, i, i2,i3...end]
// Do not edit below this line
module.exports = sumAll;
