interface INode {
    isObstacle: boolean;
    isStart: boolean;
    isFinish: boolean;

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
    private gCost: number;
    private hCost: number;
    private fCost: number;
    public isObstacle: boolean = false;
    public isStart: boolean = false;
    public isFinish: boolean = false;

    constructor(options?: { isObstacle: boolean, isStart: boolean, isFinish: boolean }) {
        if(options === undefined){
            return;
        }
        options.isObstacle ? this.isObstacle = true : this.isObstacle = false;
        options.isStart ? this.isStart = true : this.isStart = false;
        options.isFinish ? this.isFinish = true : this.isFinish = false;
    }

    private calculateFCost() {
        this.fCost = this.gCost + this.hCost;
    }
    setGCost(value: number): void {
        this.gCost = value;
        this.calculateFCost();
    }
    setHCost(value: number): void {
        this.hCost = value;
        this.calculateFCost;
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
        return this.fCost;
    }

    printNode(): void {
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

    toString(): string {
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

export default Node;
export {
    INode
}