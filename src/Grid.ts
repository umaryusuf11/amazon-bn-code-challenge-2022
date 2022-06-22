import Node from './Node'
import Pathfinder from './Pathfinder'
import Coordinate from './Coordinate'

interface IGrid {
    size: Coordinate;
    start: Coordinate;
    finish: Coordinate;
    arr: Node[][];
    obstacles: [Node];
    obstacleLocations: [Coordinate];

    addObstacle(coord: Coordinate): void;
    removeObstacle(coord: Coordinate): void;
    clearObstacles(): void;

    getNode(coord: Coordinate): Node;

    findPath():Node[];
    drawPath(path:Node[]):void;

    print(): void;
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
                row.push(new Node([x,y]))
            }
            this.arr.push(row)
        }

        let startNode = this.getNode(start);
        startNode.isStart = true;
        let finishNode = this.getNode(finish);
        finishNode.isFinish = true;

        this.calculateGridNeigbours()
    }

    private calculateGridNeigbours() {
        for (let y = 0; y < this.size[1]; y++) {
            for (let x = 0; x < this.size[0]; x++) {
                let node = this.getNode([x, y]);

                let topLeft = this.getNode([x - 1, y - 1]);
                let topMiddle = this.getNode([x, y - 1]);
                let topRight = this.getNode([x + 1, y - 1]);
                let left = this.getNode([x - 1, y]);
                let right = this.getNode([x + 1, y]);
                let bottomLeft = this.getNode([x - 1, y + 1]);
                let bottomMiddle = this.getNode([x, y + 1]);
                let bottomRight = this.getNode([x + 1, y + 1]);

                node.neigbours = {
                    topLeft,
                    topMiddle,
                    topRight,
                    left,
                    right,
                    bottomLeft,
                    bottomMiddle,
                    bottomRight
                }


            }
        }
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
        let node = this.getNode(coord);
        node.setIsObstacle(true);
    }

    removeObstacle(coord: Coordinate): void {
        let node = this.getNode(coord);
        node.setIsObstacle(false);
    }

    clearObstacles(): void {
        // IMPLEMENT
    }

    getNode(coord: Coordinate): Node {
        let [x, y] = coord;
        if (x < 0 || y < 0 || x >= this.size[0] || y >= this.size[1]) {
            return undefined;
        }
        return this.arr[x][y];
    }

    findPath(): Node[] {
        // Yet to implement
        return undefined;
    }

    drawPath(path: Node[]): void {
        // Yet to implement
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
}
