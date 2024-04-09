
// problem here is we define this long code as type wherever we pass user object

function isLegal(user: {
    firstName: string;
    lastName: string;
    age: number;
}){
    return user.age > 18 ? true : false;
}

const ans = isLegal({
    firstName: 'subhash',
    lastName: 'suman',
    age: 20
})

console.log("user legal ? " + ans)

// solution is create interface

interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string // this field is optional
}

// now put type as User interface, it will match user object with User for type checking
function greet (user: User){
    console.log("Hi " + user.firstName + " " + user.lastName)
}

const user1 = {
    firstName: 'subhash',
    lastName: 'suman',
    age: 20
}

greet(user1)


// we can implement interface also

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`Hi ${this.name} , listen this phrase ${phrase}`)
    }
}

const e = new Employee('subhash', 20);

console.log(e.greet("practice makes anyone perfect"))