class Complex {
    private real : number;
    private imag: number;
    constructor(real: number, imag: number) {
        this.real = real;
        this.imag = imag;
    }

    display() : void {
        console.log(`${this.real} + i${this.imag}`);
    }

    sum(C: Complex) : void {
        this.real += C.real;
        this.imag += C.imag;
    }

    multiply(C: Complex) : void {
        this.real = (this.real*C.real - this.imag*C.imag);
        this.imag = (this.real*C.imag + this.imag*C.real);
    }
}