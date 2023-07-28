/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    function getNeighbors(r, c, grid) {
        let neighbors = [];
        //up
        if(r > 0) {
            if(grid[r-1][c] === '1') {
                neighbors.push([r-1, c])
            }
        }
        //down
        if(r < grid.length-1) {
            if(grid[r+1][c] === '1') {
                neighbors.push([r+1, c])
            }
        }
        //left
        if(c > 0) {
            if(grid[r][c-1] === '1') {
                neighbors.push([r, c-1])
            }
        }
        //right
        if(c < grid[0].length-1) {
            if(grid[r][c+1] === '1') {
                neighbors.push([r, c+1])
            }
        }
        return neighbors;
    }

    let island = []
    let visited = new Set()
    let count = 0;

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === "1" && !visited.has(r+','+c)) {
                count++;
                let queue = getNeighbors(r,c,grid)

                while(queue.length > 0) {
                    let current = queue.shift(); //current = [r,c]
                    if(!visited.has(current[0]+ ','+ current[1])) {
                        visited.add(current[0]+ ','+ current[1])
                        queue.push(...getNeighbors(current[0],current[1],grid))
                    }

                }
            }
        }
    }





    return count;
}


grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

console.log(numIslands(grid))
