/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function objectPlus(o, stuff) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    
    for (var i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}

var shape = {
    name: 'shape',
    toString: function() {
        return this.name;
    }
};

var twoDee = objectPlus(shape, {
    name: '2D shape',
    toString: function() {
        return this.uber.toString() + ', ' + this.name;
    }
});

var triangle = objectPlus(twoDee, {
    name: 'Triangle',
    getArea: function() {
        return this.side * this.height / 2;
    },
    side: 0,
    height: 0
});