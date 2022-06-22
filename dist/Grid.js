"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class Grid {
    constructor(size, start, finish, options) {
        this.arr = [];
        this.size = size;
        this.start = start;
        this.finish = finish;
        for (let y = 0; y < size[1]; y++) {
            let row = [];
            for (let x = 0; x < size[0]; x++) {
                row.push(new Node_1.default([x, y]));
            }
            this.arr.push(row);
        }
        let startNode = this.getNode(start);
        startNode.isStart = true;
        let finishNode = this.getNode(finish);
        finishNode.isFinish = true;
        this.calculateGridNeigbours();
    }
    calculateGridNeigbours() {
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
                };
            }
        }
    }
    print() {
        for (let y = 0; y < this.size[1]; y++) {
            for (let x = 0; x < this.size[0]; x++) {
                this.arr[x][y].printNode();
            }
            console.log();
        }
    }
    addObstacle(coord) {
        let node = this.getNode(coord);
        node.setIsObstacle(true);
    }
    removeObstacle(coord) {
        let node = this.getNode(coord);
        node.setIsObstacle(false);
    }
    clearObstacles() {
        // IMPLEMENT
    }
    getNode(coord) {
        let [x, y] = coord;
        if (x < 0 || y < 0 || x >= this.size[0] || y >= this.size[1]) {
            return undefined;
        }
        return this.arr[x][y];
    }
    findPath() {
        // Yet to implement
        return undefined;
    }
    drawPath(path) {
        // Yet to implement
    }
    toString() {
        let str = "";
        for (let y = 0; y < this.size[1]; y++) {
            for (let x = 0; x < this.size[0]; x++) {
                str += this.arr[x][y].toString();
            }
            str += "\n";
        }
        return str;
    }
}
exports.default = Grid;
//# sourceMappingURL=Grid.js.map