/**
 * Created by gomezgarciad on 02/09/2014.
 */


function duckCount() {
    return [].reduce.call(arguments, function(init,curr){
        if( Object.prototype.hasOwnProperty.call(curr, 'quack')){
            return init +1 || 1;
        }
        return init;
    },0);
}

module.exports = duckCount


//var notDuck = Object.create({quack: true})
//var duck = {quack: true}
//console.log( duckCount(duck, notDuck) ); //1

