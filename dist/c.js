"use strict";
var Line = /** @class */ (function () {
    function Line(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    Line.prototype.getLength = function () {
        var dx = this.pointA.x - this.pointB.x;
        var dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Line;
}());
var l1 = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
console.log(l1.getLength());
