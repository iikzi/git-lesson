/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function Shape() {}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
    var result = [];
    if (this.constructor.uber) {
        result[result.length] = this.constructor.uber.toString();
    }
    result[result.length] = this.name;
    return result.join(', ');
}

function TwoDShape() {}

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

function extend(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.constructor;
}

extend(TwoDShape, Shape);
extend(Triangle, TwoDShape);