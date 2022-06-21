"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (this.isStart) {
            process.stdout.write(this.toString() + " ");
            return;
        }
        if (this.isFinish) {
            process.stdout.write(this.toString() + " ");
            return;
        }
        if (!this.isObstacle) {
            process.stdout.write(this.toString() + " ");
            return;
        }
        if (this.isObstacle) {
            process.stdout.write(this.toString() + " ");
            return;
        }
    }
    toString() {
        if (this.isStart) {
            return "2";
        }
        if (this.isFinish) {
            return "3";
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