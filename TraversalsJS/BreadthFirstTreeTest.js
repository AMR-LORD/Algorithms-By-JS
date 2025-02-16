const breadthFirstTraverse = (queue, array) => {
    // fill code in here
  };
  
  // unit tests
  // do not modify the below code

    const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  
    const tree = {
      value: "A",
      left: {
        value: "B",
        left: {
          value: "D",
          left: {
            value: "G",
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: "E",
          left: null,
          right: {
            value: "H",
            left: {
              value: "K",
              left: null,
              right: null
            }
          }
        }
      },
      right: {
        value: "C",
        left: {
          value: "F",
          left: {
            value: "I",
            left: null,
            right: null
          },
          right: {
            value: "J",
            left: null,
            right: null
          }
        },
        right: null
      }
    };
  
    
    const Test = JSON.stringify(breadthFirstTraverse([tree], []))==JSON.stringify(answer);
    console.log(Test? "all tests pass": "test failed");
