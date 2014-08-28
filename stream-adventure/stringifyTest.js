/**
 * Created by gomezgarciad on 27/08/2014.
 */
var map = {};
map.g1 = {};
map.g1.name="Terror";
map.g1.books=["A","B","C"];

map.g2 = {};
map.g2.name="Sci-fi";
map.g2.books=["1","2","3"];


console.log( JSON.stringify(map, function(type,value){

    if(type ==="name"){

      return "AAAA\n"+ value;
    }
    return value;
}));