// type is similar to interface but few differences

// we can combine type and create a new type

// GreetArg type can be number or string
type GreetArg = number | string;

function greet1(message: GreetArg){
    console.log("hi " + message)
}

greet1('subhash');
greet1(7);


type Employee1 = {
    name: string;
    startDate: Date;
}

type TechLead = {
    name: string;
    department: string;
}

type Manager = Employee1 & TechLead; // {name, startDate, department}