class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        return this.delete(this.length - 1);
    }

    get(index) {
        if (index < 0 || index >= this.length) return -1;

        let ptr = this.head;
        for (let i = 0; i < index; i++) {
            ptr = ptr.next;
        }
        return ptr.value;
    }

    delete(index) {
        if (index < 0 || index >= this.length) return -1;

        let itemdel;

        if (index === 0) { // حذف أول عنصر
            itemdel = this.head.value;
            this.head = this.head.next;
            if (this.length === 1) this.tail = null; // لو حذفنا العنصر الوحيد
        } else {
            let ptr = this.head;
            for (let i = 0; i < index - 1; i++) {
                ptr = ptr.next;
            }
            itemdel = ptr.next.value;
            ptr.next = ptr.next.next;

            if (index === this.length - 1) { // تحديث tail لو حذفنا آخر عنصر
                this.tail = ptr;
            }
        }

        this.length--;
        return itemdel;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// **اختبار الكود**
let list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log("قبل الحذف:");
console.log(list.get(0)); // 10
console.log(list.get(1)); // 20
console.log(list.get(2)); // 30
console.log(list.get(3)); // 40

console.log("\nحذف العنصر رقم 2:");
console.log(list.delete(2)); // المفروض 30

console.log("\nبعد الحذف:");
console.log(list.get(0)); // 10
console.log(list.get(1)); // 20
console.log(list.get(2)); // 40
console.log(list.tail.value); // المفروض 40

console.log("\nحذف آخر عنصر:");
console.log(list.delete(2)); // المفروض 40
console.log(list.tail.value); // المفروض 20
