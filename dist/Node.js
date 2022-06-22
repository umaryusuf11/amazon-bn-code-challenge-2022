"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
class Node {
    constructor(options) {
        this.isObstacle = false;
        this.isStart = false;
        this.isFinish = false;
        if (options === undefined) {
            return;
        }
        options.isObstacle ? this.isObstacle = true : this.isObstacle = false;
        options.isStart ? this.isStart = true : this.isStart = false;
        options.isFinish ? this.isFinish = true : this.isFinish = false;
    }
    calculateFCost() {
        this.fCost = this.gCost + this.hCost;
    }
    setGCost(value) {
        this.gCost = value;
        this.calculateFCost();
    }
    setHCost(value) {
        this.hCost = value;
        this.calculateFCost;
    }
    setIsObstacle(value) {
        this.isObstacle = value;
    }
    getGCost() {
        return this.gCost;
    }
    getHCost() {
        return this.hCost;
    }
    getFCost() {
        return this.fCost;
    }
    printNode() {
        /*
        0 - free
        1 - obstacle
        2 - start
        3 - finish
        */
        let stringToPrint = this.toString() + " ";
        if (this.isStart || this.isFinish) {
            process.stdout.write(colors_1.default.bgBlue.white(stringToPrint));
            return;
        }
        if (!this.isObstacle) {
            process.stdout.write(colors_1.default.bgWhite.black(stringToPrint));
            return;
        }
        if (this.isObstacle) {
            process.stdout.write(colors_1.default.bgBlack.white(stringToPrint));
            return;
        }
    }
    toString() {
        if (this.isStart) {
            return "S";
        }
        if (this.isFinish) {
            return "F";
        }
        if (!this.isObstacle) {
            return "0";
        }
        if (this.isObstacle) {
            return "1";
        }
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map