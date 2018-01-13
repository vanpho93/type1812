interface Point {
    x: number;
    y: number;
}

class Line {
    pointA: Point;
    pointB: Point;
    constructor(pointA: Point, pointB: Point) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength(): number {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const l1 = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });

console.log(l1.getLength());
