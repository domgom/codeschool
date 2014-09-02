/**
 * Created by gomezgarciad on 02/09/2014.
 */


function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
       return submittedUsers.every(function (submittedUser){
           return goodUsers.some(function(goodUser){
               return submittedUser.id === goodUser.id;
           });
       });
    };
}

module.exports = checkUsersValid
