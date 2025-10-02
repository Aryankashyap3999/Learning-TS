/* 
    function function_name(args: arg_type) : return_type {
        ...implementation
        return <val>
    }

    that val type should be equals to retur_type mentioned above.
    ex:-
*/


function sum() : number {
    return 1;
}

function sum1(num1: number, num2 : number) : number {
    return num1 + num2;
}

function sum2(num1: number, num2? : number) : number { // when you want to make num2 as an optional paremeter.
    return num1 + (num2 ? num2 : 0);
}

// Typescript never interact on runtime it just convert TS to JS then JS handles runtime. TS is development tool.
