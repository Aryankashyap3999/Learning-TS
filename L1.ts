// comments

/*
*/

/*
    Types in typescript

    Below are primitive types in TS

    string->store text
    number-> integers, real
    boolean
    undefined
    null
    bigint
    symbol

    var/let/const <variable_name> : <type_of_variable> = val; // these is called type annotation or type signature
    var num: number = 5;
    but you want to skip it you can as TS automatically undersatnd the type but unlike JS you can't reassign it to any other data type
    ex:- var num = 10;
    num = 'Aryan'; // throw an error
    but typescript given you union of types that gives you laverage to define more than one type
    ex:- var num : string | number = '23';
    num = 10;
    also you can do 
    var num: any = 'Aryan';
    num = 10;
    
*/