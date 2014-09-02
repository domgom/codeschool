/**
 * Created by gomezgarciad on 02/09/2014.
 */

function reduce(arr, fn, initial) {

    if(arr.length >1) {
        var head = arr[0];
        var tail = arr.slice(1);

        var acumulated = fn(initial, head);

        return reduce(tail, fn, acumulated);
    }else if ( arr.length === 1){
        return fn(initial,arr[0]);
    }

}

module.exports = reduce
