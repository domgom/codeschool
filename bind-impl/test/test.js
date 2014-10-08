/**
 * Created by gomezgarciad on 08/10/2014.
 */

var test = require('tape');
var bind = require('../');

test('bind basic context', function (t) {
    t.plan(1);

    var context = {value: 1};

    var f = function(){
        this.value = this.value +1;
    }

    var bound = bind(f,context);
    bound();

    t.equal(context.value, 2,'Context updated');

});

test('bind basic context with return value', function (t) {
    t.plan(1);
    var returnValue= "returnValue";

    var f = function(){
        return returnValue;
    }

    var bound = bind(f,null);
    var result = bound();

    t.equal(result, returnValue,'Value returned');

});

test('bind context with one argument', function (t) {
    t.plan(1);
    var added = 3;

    var context = {value: 1};

    var f = function(sum){
        this.value = this.value +sum;
    }

    var bound = bind(f,context);
    bound(added);

    t.equal(context.value, 4,'Context updated with argument value');

});

test('bind context with several arguments', function (t) {
    t.plan(1);

    var context = {value: 1};

    var f = function(sum, substract, multiply){
        this.value = (this.value +sum - substract)*multiply;
    }

    var bound = bind(f,context);
    bound(2,1,2);

    t.equal(context.value, 4,'Context updated with argument value');

});


test('bind context and one argument', function (t) {
    t.plan(1);
    var added = 3;

    var context = {value: 1};

    var f = function(sum){
        this.value = this.value +sum;
    }

    var bound = bind(f,context,added);
    bound();

    t.equal(context.value, 4,'Context updated with argument value');

});

test('bind context and one argument and two calls', function (t) {
    t.plan(1);
    var added = 3;

    var context = {value: 1};

    var f = function(sum){
        this.value = this.value +sum;
    }

    var bound = bind(f,context,added);
    bound();
    bound();

    t.equal(context.value, 7,'Context updated with argument value and two calls');

});


test('Curryfing!', function (t) {
    t.plan(1);

    var f = function(a,b,c){
       return a + b + c;
    }

    var bound = bind(f,null,1);
    var result = bound(2,3);

    t.equal(result,6,'Context updated with curryfing');

});


test('Double Curryfing!', function (t) {
    t.plan(1);

    var f = function(a,b,c){
        return a + b + c;
    }

    var bound = bind(f,null,1);
    var bound2 = bind(bound,null,2);
    var result = bound2(3);

    t.equal(result,6,'Context updated with double curryfing');

});
