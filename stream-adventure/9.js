/**
 * Created by gomezgarciad on 26/08/2014.
 */

var ws = require("websocket-stream");
var webs = ws("ws://localhost:8000");

webs.end("hello\n");

