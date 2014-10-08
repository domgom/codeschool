/**
 * Created by gomezgarciad on 08/10/2014.
 */

module.exports = function(f, context){
    //var baseArgs = arguments.slice(2); SLICE DOESN'T EXIST IN ARRAY-LIKE STRUCTURES
    var baseArgs = [].slice.call(arguments,2);

    return function(){
        // baseArgs.concat(arguments); CONCAT DOESN'T ACCEPT ARRAY-LIKE STRUCTURES
        var funcArgs = [].slice.call(arguments);
        return f.apply(context, baseArgs.concat(funcArgs));
    };
}
