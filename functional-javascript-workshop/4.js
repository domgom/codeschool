/**
 * Created by gomezgarciad on 02/09/2014.
 */

function getShortMessages(messages) {
    return messages.filter(function (m) {
        return  m.hasOwnProperty("message") && m.message.length < 50;
    }).map(function (m) {
        return m.message;
    });
}

module.exports = getShortMessages
