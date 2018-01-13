function getItSelf<T>(x: T): T {
    return x;
}

interface HasName { name: string }

const p: HasName = { name: 'Teo' };

console.log(getItSelf<string>('acbsa').length);

const d: Array<Array<number>> = [[1, 2]];
