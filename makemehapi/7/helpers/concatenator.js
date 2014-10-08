/**
 * Created by gomezgarciad on 02/10/2014.
 */
module.exports = function(context) {
    return context.data.root.query.name + context.data.root.query.suffix;
}