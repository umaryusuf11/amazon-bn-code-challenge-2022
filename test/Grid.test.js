const Grid = require('../dist/Grid').default

test('generate grid.', () => {
    let grid = new Grid([10, 10], [0, 0], [9, 9]);
    let start = grid.getNode([0,0]).toString();
    let finish = grid.getNode([9,9]).toString();
    let randomNode = grid.getNode([4,8]).toString();

    expect(start).toBe("2");
    expect(randomNode).toBe("0");
    expect(finish).toBe("3");
});

test('add obstacles.', () => { 
    let grid = new Grid([10, 10], [0, 0], [9, 9]);
    
    let start = grid.getNode([0,0]).toString();
    let finish = grid.getNode([9,9]).toString();
    expect(start).toBe("2");
    expect(finish).toBe("3");
    
    grid.addObstacle([9,7]);
    grid.addObstacle([8,7]);
    grid.addObstacle([6,7]);
    grid.addObstacle([6,8]);

    let obstacle1 = grid.getNode([9,7]).toString();
    let obstacle2 = grid.getNode([8,7]).toString();
    let obstacle3 = grid.getNode([6,7]).toString();
    let obstacle4 = grid.getNode([6,8]).toString();

    expect(obstacle1).toBe("1")
    expect(obstacle2).toBe("1")
    expect(obstacle3).toBe("1")
    expect(obstacle4).toBe("1")

});