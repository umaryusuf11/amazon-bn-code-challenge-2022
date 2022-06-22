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
                row.push(new Node_1.default);
            }
            this.arr.push(row);
        }
        let startNode = this.getNode(start);
        startNode.isStart = true;
        let finishNode = this.getNode(finish);
        finishNode.isFinish = true;
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
        return this.arr[x][y];
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