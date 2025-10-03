var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
    }
    return node;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.addAtHead = function (x) {
        if (this.head == null) {
            this.head = new node(x);
            return;
        }
        var newNode = new node(x);
        newNode.next = this.head;
        this.head = newNode;
    };
    LinkedList.prototype.display = function () {
        var temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    return LinkedList;
}());
var ll = new LinkedList();
ll.addAtHead(new Person("aryan"));
ll.addAtHead(new Person("kashyap"));
ll.addAtHead(new Person("aman")); // Corrected "gh" to "ghi" for consistency
ll.addAtHead(new Person("chirag"));
ll.display();
// Note: There seems to be a typo in "1l.display()" - it should be "ll.display()"
