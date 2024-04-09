// current problem without generic

function fun(arg: (string | number)){
    return arg;
}

// hover over arg, return type inferred as string | number
// so we can't apply any string specific or number specific method over arg , willl throw error

const arg = fun('subhash');

// console.log(arg.toUpperCase()); // throw error as ts confuse to identify string type only.


// use generic

function returnName<T>(name: T){
    return name;
}

// now hover over arg1, return type inferred as string
const arg1 = returnName<string>('subhash');
console.log(arg1.toUpperCase())