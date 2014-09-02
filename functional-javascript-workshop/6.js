/**
 * Created by gomezgarciad on 02/09/2014.
 */

function countWords(inputWords) {

   return inputWords.reduce(function(result,item){
      result[item] =  result[item] + 1 || 1;
      return result;
   },{});

}

module.exports = countWords
