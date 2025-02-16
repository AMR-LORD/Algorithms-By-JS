const preorderTraverse = (node, array) => {
    // code goes here
  };
  
  const inorderTraverse = (node, array) => {
    // code goes here
  };
  
  const postorderTraverse = (node, array) => {
    // code goes here
  };
  
  // unit tests
  // do not modify the below code
    const tree = {
      value: 8,
      left: {
        value: 4,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: {
            value: 7,
            left: {
              value: 6,
              left: null,
              right: null
            }
          }
        }
      },
      right: {
        value: 12,
        left: {
          value: 10,
          left: {
            value: 9,
            left: null,
            right: null
          },
          right: {
            value: 11,
            left: null,
            right: null
          }
        }
      }
    };
  
  const preorder =   JSON.stringify(preorderTraverse(tree, []))==JSON.stringify([
        8,
        4,
        3,
        2,
        5,
        7,
        6,
        12,
        10,
        9,
        11
      ]);
 
  
     const inorder =  JSON.stringify(inorderTraverse(tree, []))==JSON.stringify([
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]);
    
    const postorder= JSON.stringify(postorderTraverse(tree, []))==JSON.stringify([
        2,
        3,
        6,
        7,
        5,
        4,
        9,
        11,
        10,
        12,
        8
      ]);
  
      //test cases 
        console.log(preorder);
        console.log(inorder);
        console.log(postorder);