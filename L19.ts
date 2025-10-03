class node<T> {
  data: T;
  next: node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Person {
  constructor(public name: string) {
    this.name = name
  }
}

class LinkedList<T> {
  head: node<T> | null;

  constructor() {
    this.head = null;
  }

  addAtHead(x: T): void {
    if (this.head == null) {
      this.head = new node(x);
      return;
    }
    let newNode: node<T> = new node(x);
    newNode.next = this.head;
    this.head = newNode;
  }

  display(): void {
    let temp: node<T> | null = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let ll = new LinkedList<Person>();

ll.addAtHead(new Person("aryan"));
ll.addAtHead(new Person("kashyap"));
ll.addAtHead(new Person("aman")); // Corrected "gh" to "ghi" for consistency
ll.addAtHead(new Person("chirag"));
ll.display();

// Note: There seems to be a typo in "1l.display()" - it should be "ll.display()"

