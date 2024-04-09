const x: number = 1;
console.log(x);


function greek1(firstName: string){
    console.log("hello " + firstName);
}

function greek2(firstName: any){
    console.log("hello " + firstName);
}

// need to pass string type explicitly
greek1("subhash");

// any type can be passed
greek2(45);
greek2("suman");


// type inference
// TS able to identify return type by looking code, so it infer return type as boolean, 
// don't need to write explicitly
function isLegal1(age: number){
    if(age > 18)
        return true;
    else
        return false;
}

// explicitly set return type as boolean
function isLegal2(age: number): boolean{
    if(age > 18)
        return true;
    else
        return false;
}

// TYPE INFERENCE, will get error as return type will be boolean
// const res1: string = isLegal1(45);

const res2 = isLegal1(45); // hover over res2, will see boolean type as inferred.

console.log(isLegal2(65));

// one way to give type as any in case of function
function fun1(fun2: any){
    setTimeout(()=>{fun2()}, 1000);
}

// better
// setting function type having no any args and no return 
function fun3(fun: ()=>void){
    fun();
}

function fun2(){
    console.log("fun 2")
}

fun1(fun2);

function sum(a:number, b:number){
    return a+b;
}

// function type taking two number type as args and return number type
function doSum(sum : (x:number, y:number) => number){
    console.log(sum(5, 2));
}

doSum(sum);