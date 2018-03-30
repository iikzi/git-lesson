/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function multi() {
    var n = {}, j = 0, stuff, len = arguments.length;
    for (j = 0; j < len; j++) {
        stuff = arguments[j];
        for (var i in stuff) {
            n[i] = stuff[i];
        }
    }
    return n;
}

var shape = {
    name: 'shape',
    toString: function() {
        return this.name;
    }
}

var twoDee = {
    name: '2D shape',
    dimensions: 2
};

var triangle = multi(shape, twoDee, {
    name: 'Triangle',
    getArea: function() {
        return this.side * this.height / 2;
    },
    side: 5,
    height: 10
});