import Grid from "./Grid";

const grid = new Grid([10,10], [0,0], [9,9])
grid.addObstacle([9,7]);
grid.addObstacle([8,7]);
grid.addObstacle([6,7]);
grid.addObstacle([6,8]);

grid.print()