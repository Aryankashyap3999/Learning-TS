const result = {
    name: "Aryan",
    marks: 85
}

result.marks = 90; // it will not throw any type error but
// result.address = 'AAAS'
//  It will throw type error when adding a new key pair

// sometime it is tidious job to write {name: string, marks: number, address?: string} everytime then we can i do one thing that is 
type Details = {name: string, marks: number, address?: string};


const result1 : Details = {
    name: "Aryan",
    marks: 85
}

const result2 : Details = {
    name: "Aman",
    marks: 85
}


result1.marks = 90; 
result1.address = 'AAAS';