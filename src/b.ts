interface HasLength {
    length: number;
}

function getTotalLength(arr1: HasLength, arr2: HasLength) {
    return arr1.length + arr2.length;
}

console.log(getTotalLength([1, 3, 4], [6, 3, 1]));
console.log(getTotalLength('a', 'bc'));
