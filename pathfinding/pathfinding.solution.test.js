const logMaze = require("./logger");
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data

//#region hint
/*

**Task 1:** Define a function named `findShortestPathLength` that takes three parameters:
- A 2D array `maze` representing the grid.
- Two coordinate pairs `[xA, yA]` and `[xB, yB]` representing the starting and ending points.

---

**Task 2:** Create a `visited` matrix based on the `maze`:
- For each cell in the `maze`, initialize an object with the following properties:
  - `closed`: Set to `true` if the corresponding cell in the `maze` is blocked (e.g., value `1`), otherwise `false`.
  - `length`: Initialize to `0`.
  - `openedBy`: Initialize to `NO_ONE` (indicating no one has visited this cell yet).
  - `x` and `y`: Store the coordinates of the cell.

---

**Task 3:** Mark the starting and ending points:
- Set the `openedBy` property of the starting point `[xA, yA]` to `BY_A`.
- Set the `openedBy` property of the ending point `[xB, yB]` to `BY_B`.

---

**Task 4:** Log the initial state of the `visited` matrix for debugging purposes.

---

**Task 5:** Initialize two queues:
- Add the starting point `[xA, yA]` to the `aQueue`.
- Add the ending point `[xB, yB]` to the `bQueue`.

---

**Task 6:** Initialize a variable `iteration` to `0` to track the number of steps taken.

---

**Task 7:** Start a loop that continues as long as both `aQueue` and `bQueue` are not empty:
- Increment the `iteration` counter by `1`.

---

**Task 8:** Process the neighbors of all cells in `aQueue`:
- For each cell in `aQueue`, find its valid neighbors using the `getNeighbors` function:
  - Valid neighbors are those that are not blocked (`closed === false`) and have not been visited yet.
- For each neighbor:
  - If the neighbor was opened by `BY_B`, return the sum of its `length` and the current `iteration` as the shortest path length.
  - Otherwise, if the neighbor has not been visited (`openedBy === NO_ONE`):
    - Set its `length` to the current `iteration`.
    - Set its `openedBy` to `BY_A`.
    - Add it to the `aQueue`.

---

**Task 9:** Process the neighbors of all cells in `bQueue`:
- For each cell in `bQueue`, find its valid neighbors using the `getNeighbors` function:
  - Valid neighbors are those that are not blocked (`closed === false`) and have not been visited yet.
- For each neighbor:
  - If the neighbor was opened by `BY_A`, return the sum of its `length` and the current `iteration` as the shortest path length.
  - Otherwise, if the neighbor has not been visited (`openedBy === NO_ONE`):
    - Set its `length` to the current `iteration`.
    - Set its `openedBy` to `BY_B`.
    - Add it to the `bQueue`.

---

**Task 10:** Log the updated state of the `visited` matrix for debugging purposes.

---

**Task 11:** If the loop ends without finding a connection between the two queues, return `-1` to indicate that there is no valid path.

---

**Task 12:** Define a helper function `getNeighbors` to find valid neighbors of a given cell:
- Check the four possible directions (up, down, left, right) from the current cell:
  - Ensure the neighboring cell is within the bounds of the `maze`.
  - Ensure the neighboring cell is not blocked (`closed === false`).
- Return a list of all valid neighbors.

--- 

This step-by-step breakdown explains the logic and flow of the algorithm without using any code.
*/
//#endregion

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const visited = maze.map((row, y) =>
    row.map((origin, x) => ({
      closed: origin === 1,
      length: 0,
      openedBy: NO_ONE,
      x,
      y
    }))
  );
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;
  logMaze(visited);

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  let iteration = 0;

  // if one runs out, there's no path
  while (aQueue.length && bQueue.length) {
    iteration++;
    const aNeighbors = aQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      []
    );
    aQueue = [];
    for (let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i];
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }

    const bNeighbors = bQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      []
    );
    bQueue = [];
    for (let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i];
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_B;
        bQueue.push(neighbor);
      }
    }
    logMaze(visited);
  }
  return -1;
};

const getNeighbors = (visited, x, y) => {
  const neighbors = [];

  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // left
    neighbors.push(visited[y - 1][x]);
  }

  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x]);
  }

  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }

  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }

  return neighbors;
};

// unit testsj
// do not modify the below code
test("findShortestPathLength - fourByFour", () => {
  const fourByFour = [
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2]
  ];
  expect(findShortestPathLength(fourByFour, [0, 0], [3, 3])).toBe(6);
});

test("findShortestPathLength - sixBySix", () => {
  const sixBySix = [
    [0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0]
  ];
  expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toBe(7);
});

test("findShortestPathLength - eightByEight", () => {
  const eightByEight = [
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2]
  ];
  expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toBe(16);
});

test("findShortestPathLength - fifteenByFifteen", () => {
  const fifteenByFifteen = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toBe(78);
});

test("findShortestPathLength - byEachOther", () => {
  const byEachOther = [
    [0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
  ];
  expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toBe(1);
});

test("findShortestPathLength - impossible", () => {
  const impossible = [
    [0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 2]
  ];
  expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toBe(-1);
});
console.log(";;"); // why when i run the program it doesn't print the console.log(";;")?
