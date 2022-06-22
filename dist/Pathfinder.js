"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = void 0;
function distance(coordA, coordB) {
    // Formula: sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let [x1, y1] = coordA;
    let [x2, y2] = coordB;
    let x = Math.abs(x2 - x1);
    x = x * x;
    let y = Math.abs(y2 - y1);
    y = y * y;
    let z = x + y;
    z = Math.sqrt(z);
    return z;
}
exports.distance = distance;
function toArray(json) {
    let result = [];
    for (let key in json) {
        result.push(json[key]);
    }
    return result;
}
/** Generates a path from the start to the finish of a grid using the A* Pathfinding Algorithm
 * @param grid - The grid to solve.
*/
class Pathfinder {
    constructor(grid) {
        let start = grid.start;
        let finish = grid.finish;
        let startNode = grid.getNode(start);
        let finishNode = grid.getNode(finish);
        let neigbourhood = startNode.neigbours;
        let neigbours = toArray(neigbourhood);
        neigbours.forEach(neigbour => {
            if (neigbour === undefined) {
                return;
            }
            neigbour.setGCost((distance(start, neigbour.position)) * 10);
            neigbour.setHCost((distance(finish, neigbour.position)) * 10);
        });
    }
}
exports.default = Pathfinder;
//# sourceMappingURL=Pathfinder.js.map