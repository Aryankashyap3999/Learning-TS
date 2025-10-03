let schoolName : "DPS" | "DAV" = "DAV";
let another : string = "Kv";
 
// schoolName = another it throw error as schoolname can take only two values but you can assign
another = schoolName;

type Complex = {
    real: number,
    img: number,
}

interface IComplex {
    real: number,
    img: number;
}

let c11: Complex = {
    real: 10,
    img: 12
}

let c12: IComplex = {
    real: 10,
    img: 12
}

c11 = c12; // TS will consider them same as members are same. Althrough names are different but still it doen't matter
// TS only check that whether IComplex has all requirements that type Comple required if yes  it is assignable.

