// Can type and inerface can represent functions ?

type logger = (msg: string, errorCode: number) => void;

interface LoggerInterface {
    (msg: StaticRange, erroCode: number) : void;
}

// Defining unions can be done by types but not interfaces

type unionOfNumberAndString = number | string;

interface ComplexNumber {
    real: number,
    imaginary: number
}

interface ComplexNumber {
    add(): (num: ComplexNumber) => ComplexNumber;
}

// equivalent to write 
interface ComplexNumber {
    real: number,
    imaginary: number,
    add(): (num: ComplexNumber) => ComplexNumber;
}
