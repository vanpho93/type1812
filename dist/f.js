"use strict";
var Huong;
(function (Huong) {
    Huong[Huong["Dong"] = 0] = "Dong";
    Huong[Huong["Tay"] = 1] = "Tay";
    Huong[Huong["Nam"] = 2] = "Nam";
    Huong[Huong["Bac"] = 3] = "Bac";
})(Huong || (Huong = {}));
var Nha = /** @class */ (function () {
    function Nha(address, huong) {
        this.address = address;
        this.huong = huong;
    }
    return Nha;
}());
var n = new Nha('93 LTR', Huong.Tay);
console.log(0 == Huong.Dong);
console.log(n);
