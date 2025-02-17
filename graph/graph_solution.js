// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root node
  getUser             - function - a function that returns a user's object given an ID
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
/*
findMostCommonTitle function step by step. Each task will guide you through writing the code yourself.

Tasks

Task 1: Understand the Problem

You are given:
myId: The ID of the user who is the root node.

getUser: A function that retrieves a user's details (ID, name, company, title, and connections).

degreesOfSeparation: How far to traverse from the root user in terms of connections.

Your goal:
Count the frequency of job titles for the root user and all users within the specified degrees of separation.
Return the most common job title.
-----------------------------------------------------
-----------------------------------------------------

Task 2: Initialize Variables

Create a queue to store user IDs to process (queue = [myId]).

Use a Set called seen to track visited user IDs to avoid revisiting them.

Create an object jobs to store the count of each job title.
-----------------------------------------------------
-----------------------------------------------------

Task 3: Traverse the Graph

Use a loop to traverse the graph up to the specified degreesOfSeparation.

Inside the loop:
Create a new queue (newQueue) to store the next level of connections.

Process each user in the current queue:
Retrieve the user's details using getUser.

Add their connections to newQueue if they haven't been visited yet.

Update the seen set with the visited connections.

Increment the count of their job title in the jobs object.

-----------------------------------------------------
-----------------------------------------------------

Task 4: Count Job Titles

After traversing the graph, the jobs object will contain the frequency of each job title.

Find the job title with the highest count:

Get all keys (job titles) from the jobs object.

Iterate through the keys to find the one with the maximum count.

-----------------------------------------------------
-----------------------------------------------------

Task 5: Return the Result
Return the job title with the highest frequency.

*/


const { getUser } = require("./jobs");
const findMostCommonTitle = (myId, degreesOfSeparation) => {
    let queue = [myId];
    const seen = new Set(queue);
    const jobs = {};
  
    for (let i = 0; i <= degreesOfSeparation; i++) {
      const newQueue = [];
      while (queue.length) {
        const user = getUser(queue.shift());
  
        // queue up next iteration of connections
        for (let j = 0; j < user.connections.length; j++) {
          const connection = user.connections[j];
          if (!seen.has(connection)) {
            newQueue.push(connection);
            seen.add(connection);
          }
        }
  
        // count the job
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
      }
  
      queue = newQueue;
    }
  
    // find key with the biggest number
  
    const jobKeys = Object.keys(jobs);
  
    let biggestNumber = jobs[jobKeys[0]];
    let jobName = jobKeys[0];
    for (let i = 1; i < jobKeys.length; i++) {
      const currentJob = jobKeys[i];
      if (jobs[currentJob] > biggestNumber) {
        jobName = currentJob;
        biggestNumber = jobs[currentJob];
      }
    }
  
    // see all job titles, sorted
    // jobKeys
    //   .map((id) => [id, jobs[id]])
    //   .sort((a, b) => b[1] - a[1])
    //   .slice(0, 10)
    //   .forEach(([job, num]) => console.log(`${num} – ${job}`));
  
    // console.log("======");
  
    return jobName;
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