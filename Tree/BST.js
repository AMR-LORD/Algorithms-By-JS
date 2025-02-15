class Tree {
    constructor() {
        this.Root = null;
    }
    add(value) {
        let node = new Node(value);
        let srch_node = this.Root;
        let added = false;
        if (this.Root == null) {
            this.Root = node;
        } else {
            while (!added) {
                if (value < srch_node.value) { // ✅ تصحيح الاتجاهات
                    if (srch_node.left == null) { 
                        srch_node.left = node;
                        added = true;
                    } else {
                        srch_node = srch_node.left;
                    }
                } else if (value > srch_node.value) { // ✅ تصحيح الاتجاهات
                    if (srch_node.right == null) { 
                        srch_node.right = node;
                        added = true;
                    } else {
                        srch_node = srch_node.right;
                    }
                } else { 
                    return; // ✅ منع التكرار
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function testTree() {
    let tree = new Tree();
    
    // إضافة قيم إلى الشجرة
    tree.add(50);
    tree.add(30);
    tree.add(70);
    tree.add(20);
    tree.add(40);
    tree.add(60);
    tree.add(80);

    console.log("✅ **اختبار الإضافة**");
    console.log(tree.Root); // المفروض تكون العقدة الجذرية 50
    console.log(tree.Root.left.value); // المفروض 30
    console.log(tree.Root.right.value); // المفروض 70
    console.log(tree.Root.left.left.value); // المفروض 20
    console.log(tree.Root.left.right.value); // المفروض 40
    console.log(tree.Root.right.left.value); // المفروض 60
    console.log(tree.Root.right.right.value); // المفروض 80
}

// تشغيل الاختبار
testTree();
