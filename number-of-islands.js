var numIslands = function(grid) {
    const numRows = (grid || []).length;
    if (numRows <= 0) return 0;
    const numCols = grid[0].length;
    let numIslands = 0;
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === '1') {
                numIslands += 1;
                grid[row][col] = '0';
                const queue = [];
                queue.push([row,col]);
                while(queue.length > 0) {
                    const rowAndCol = queue.shift();
                    const r = rowAndCol[0];
                    const c = rowAndCol[1];
                    
                    if ((r - 1) >= 0 && grid[r - 1][c] === '1') {
                        queue.push([r - 1, c]);
                        grid[r - 1][c] = '0'
                    }
                    
                    if ((r + 1) <= numRows && grid[r + 1][c] === '1') {
                        queue.push([r + 1, c]);
                        grid[r + 1][c] = '0'
                    }
                    
                    if ((c - 1) >= 0 && grid[r][c - 1] === '1') {
                        queue.push([r, c - 1]);
                        grid[r][c - 1] = '0'
                    }
                    
                    if ((c + 1) <= numCols && grid[r][c + 1] === '1') {
                        queue.push([r, c + 1]);
                        grid[r][c + 1] = '0'
                    }
                    
                }
            }
        }
    }

    return numIslands;
};

const grid = 
[["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]];

 console.log('num islands should be 1', numIslands(grid));