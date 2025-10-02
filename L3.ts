/*

    how to define types for objects
    - classes-> member function, data member
    - interface

*/

class Car {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}


// it provides implementation whereas interface doesn't provide any implementation

interface Product {
    name: string;
    price: number;
    brand: string;
    display() : void;

}

 // Interface :- It is a contract

 let c1 = new Car('santro');
 // same thing is not possible for interface 
//  let p1 = new Product() as interface can't be intiated.

let p1 : Product = {
    name: 'Iphone',
    price: 10000,
    brand: "Apple",
    display() {
        console.log("Displaying details");
    }
}