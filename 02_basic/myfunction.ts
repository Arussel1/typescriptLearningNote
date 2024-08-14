function addTwo(num: number):number{
     return num + 2;
    //return "Hello";
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(username: string, email: string, isSigned: boolean){}

let loginUser = (name: string, email: string, isSigned: boolean = false) => {}

let myValue = addTwo(5);
getUpper("test");

signUpUser("Noal","Noal@example.com", true);
loginUser("Noal","Noal@example.com");

function getValue(myVal: number):string|boolean{
    if (myVal  > 5) return true;
    return "200 OK";
}

const getHello = (s: string):string => { return "" };

// const heroes = ["spiderman","batman","superman"];
const heroes = [1,2,3];

heroes.map( (hero):string => {
    return `hero is ${hero}`;
})

function consoleError(err:string):void{
    console.log(err);
}

function handleError(err:string):never{
    throw new Error(err);
}

export {}