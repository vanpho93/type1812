interface CanTalk {
    talk: () => any;
}

function play(a: CanTalk) {
    a.talk();
}

class Person implements CanTalk {
    talk() {
        console.log('Toi la nguoi');
    }
}

class Cow implements CanTalk {
    talk() {
        console.log('Toi la bo');
    }
}

const a = new Person();
const b = new Cow();

play(b)
