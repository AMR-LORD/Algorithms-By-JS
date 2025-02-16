
const breadthFirstTraverse2 = (queue, array) => {
    if (!queue.length) return array;
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    return breadthFirstTraverse(queue, array);
  };
  

const breadthFirstTraverse = (queue, array) => {
    while (queue.length > 0) {
        let node = queue.shift();  // استخراج أول عقدة من الطابور
        array.push(node.value);    // إضافة قيمة العقدة إلى المصفوفة
        
        if (node.left) queue.push(node.left);   // إضافة الابن الأيسر إلى الطابور إذا كان موجودًا
        if (node.right) queue.push(node.right); // إضافة الابن الأيمن إلى الطابور إذا كان موجودًا
    }
    return array;
};

// unit tests
// لا تقم بتعديل الكود أدناه

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

// اختبار الكود
const Test = JSON.stringify(breadthFirstTraverse([tree], [])) == JSON.stringify(answer);
console.log(Test ? "all tests pass" : "test failed");


// اختبار الكود
const Test2 = JSON.stringify(breadthFirstTraverse2([tree], [])) == JSON.stringify(answer);
console.log(Test2 ? "all test 2 pass" : "test failed");
