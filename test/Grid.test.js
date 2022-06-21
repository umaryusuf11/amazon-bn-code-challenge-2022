const Grid = require('../dist/Grid').default

test('generate grid.', () => {
    let grid = new Grid([10, 10], [0, 0], [9, 9])
    let start = grid.getNode([0,0]).toString();
    let finish = grid.getNode([9,9]).toString();
    let randomNode = grid.getNode([4,8]).toString();

    expect(start).toBe("2");
    expect(randomNode).toBe("0");
    expect(finish).toBe("3");
});
