enum Huong {
    Dong, Tay, Nam, Bac
}

class Nha {
    address: string;
    huong: Huong;
    constructor(address: string, huong: Huong) {
        this.address = address;
        this.huong = huong;
    }
}

const n = new Nha('93 LTR', Huong.Tay);
console.log(0 == Huong.Dong);
console.log(n);
