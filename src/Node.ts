import colors from 'colors'
import { Coordinate } from './Grid';

interface INode {
    position: Coordinate;
    isObstacle: boolean;
    isStart: boolean;
    isFinish: boolean;
    neigbours: {
        topLeft: Node;
        topMiddle: Node;
        topRight: Node;
        left: Node;
        right: Node;
        bottomLeft: Node;
        bottomMiddle: Node;
        bottomRight: Node;
    }

    setGCost(value: number): void;
    setHCost(value: number): void;
    setIsObstacle(value: boolean): void;

    getGCost(): number;
    getHCost(): number;
    getFCost(): number;

    printNode(): void;

    toString(): string;
}

class Node implements INode {
    position: Coordinate;
    private gCost: number;
    private hCost: number;
    private fCost: number;

    public isObstacle: boolean = false;
    public isStart: boolean = false;
    public isFinish: boolean = false;
    public neigbours: {
        topLeft: Node;
        topMiddle: Node;
        topRight: Node;
        left: Node;
        right: Node;
        bottomLeft: Node;
        bottomMiddle: Node;
        bottomRight: Node;
    };

    constructor(position: Coordinate, options?: { isObstacle: boolean, isStart: boolean, isFinish: boolean }) {
        this.position = position;
        if(options === undefined){
            return;
        }
        options.isObstacle ? this.isObstacle = true : this.isObstacle = false;
        options.isStart ? this.isStart = true : this.isStart = false;
        options.isFinish ? this.isFinish = true : this.isFinish = false;
    }

    private calculateFCost() {
        this.fCost = this.getGCost() + this.getHCost();
    }
    setGCost(value: number): void {
        this.gCost = value;
        this.calculateFCost();
    }
    setHCost(value: number): void {
        this.hCost = value;
        this.calculateFCost();
    }
    setIsObstacle(value: boolean): void {
        this.isObstacle = value;
    }

    getGCost(): number {
        return this.gCost;
    }
    getHCost(): number {
        return this.hCost;
    }
    getFCost(): number {
        if(this.isObstacle){
            return Number.MAX_VALUE;
        }
        return this.fCost;
    }

    printNode(): void {
        /*      
        0 - free
        1 - obstacle
        2 - start
        3 - finish
        */
       let stringToPrint = this.toString() + " "
        if (this.isStart || this.isFinish) {
            process.stdout.write(colors.bgBlue.white(stringToPrint));
            return;
        }
        if (!this.isObstacle) {
            process.stdout.write(colors.bgWhite.black(stringToPrint));
            return;
        }
        if (this.isObstacle) {
            process.stdout.write(colors.bgBlack.white(stringToPrint));
            return;
        }

    }

    toString(): string {
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

export default Node;
export {
    INode
}