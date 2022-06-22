"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = __importDefault(require("./Grid"));
const Pathfinder_1 = __importDefault(require("./Pathfinder"));
const grid = new Grid_1.default([10, 10], [0, 0], [9, 9]);
grid.addObstacle([9, 7]);
grid.addObstacle([8, 7]);
grid.addObstacle([6, 7]);
grid.addObstacle([6, 8]);
grid.print();
let pathfinder = new Pathfinder_1.default(grid);
//# sourceMappingURL=index.js.map