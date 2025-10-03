class Stack<T> {
  private array: T[];

  constructor() {
    this.array = [];
  }

  push(x: T): void {
    this.array.push(x);
  }

  pop(): void {
    this.array.pop();
  }

  top(): T | undefined {
    return this.array[this.array.length - 1];
  }

  display() : void {
    console.log(this.array);
  }
}

const st = new Stack<string>();
st.push("as");
st.push("asd");
st.push("we");
st.display();