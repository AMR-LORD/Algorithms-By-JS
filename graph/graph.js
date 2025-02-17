// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root node
  
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

/*
  getUser  - function - a function that returns a user's object given an ID

  example

  {
    id: 308,
    name: "Beatrisa Lalor",
    company: "Youtags",
    title: "Office Assistant II",
    connections: [687, 997, 437]
  }
*/
const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  // code goes here
};

// unit tests
const test1 = findMostCommonTitle(30, 2) === "Librarian";
const test2 = findMostCommonTitle(11, 3) === "Graphic Designer";
const test3 = findMostCommonTitle(306, 4) === "Pharmacist";
const test4 = findMostCommonTitle(1, 7) === "Geological Engineer";
console.log(findMostCommonTitle(30, 2));
console.log(findMostCommonTitle(11, 3));
console.log(findMostCommonTitle(306, 4));
console.log(findMostCommonTitle(1, 7));
console.log(test1 ? 'pass' : 'fail');
console.log(test2 ? 'pass' : 'fail');
console.log(test3 ? 'pass' : 'fail');
console.log(test4 ? 'pass' : 'fail');