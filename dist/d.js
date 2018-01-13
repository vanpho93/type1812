"use strict";
function play(a) {
    a.talk();
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.talk = function () {
        console.log('Toi la nguoi');
    };
    return Person;
}());
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.talk = function () {
        console.log('Toi la bo');
    };
    return Cow;
}());
var a = new Person();
var b = new Cow();
play(b);
