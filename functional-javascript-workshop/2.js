/**
 * Created by gomezgarciad on 02/09/2014.
 */

function repeat(operation, num) {

    if(num>0){
       operation();
       return repeat(operation, --num);
    }

}

// Do not remove the line below
module.exports = repeat