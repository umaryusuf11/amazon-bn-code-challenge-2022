import Node from './Node'

type Coordinate = [x: number, y: number];
interface IGrid {
    size: Coordinate;
    start: Coordinate;
    finish: Coordinate;
    arr: Node[][];
    obstacles: [Node];
    obstacleLocations: [Coordinate]
    print(): void;
    addObstacle(coord: Coordinate): void;
    removeObstacle(coord: Coordinate): void;
    clearObstacles(): void;
    getNode(coord:Coordinate): Node
    toString(): string;
}

class Grid implements IGrid {
    size: Coordinate;
    start: Coordinate;
    finish: Coordinate;
    arr: Node[][] = [];
    obstacles: [Node]
    obstacleLocations: [Coordinate];

    constructor(size: Coordinate, start: Coordinate, finish: Coordinate, options?: {}) {
        this.size = size;
        this.start = start;
        this.finish = finish;

        for (let y = 0; y < size[1]; y++) {
            let row = [];
            for (let x = 0; x < size[0]; x++) {
                row.push(new Node)
            }
            this.arr.push(row)
        }

        let startNode = this.getNode(start);
        startNode.isStart = true;
        let finishNode = this.getNode(finish);
        finishNode.isFinish = true;
    }

    print(): void {
        for (let y = 0; y < this.size[1]; y++) {
            for (let x = 0; x < this.size[0]; x++) {
                this.arr[x][y].printNode();
            }
            console.log();
        }
    }

    addObstacle(coord: Coordinate): void {
        // IMPLEMENT
    }

    removeObstacle(coord: Coordinate): void {
        // IMPLEMENT
    }

    clearObstacles(): void {
        // IMPLEMENT
    }

    getNode(coord: Coordinate): Node{
        let [x,y] = coord;
        return this.arr[x][y];
    }

    toString(): string {
        let str = ""
        for (let y = 0; y < this.size[1]; y++) {
            for (let x = 0; x < this.size[0]; x++) {
                str += this.arr[x][y].toString();
            }
            str += "\n";
        }

        return str;
    }
}

export default Grid;
export {
    IGrid,
    Coordinate,
}
