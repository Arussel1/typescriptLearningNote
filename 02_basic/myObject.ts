/* const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({name: string, isActive: boolean}){}

let newUser = {name: "Hello", isActive: false, email:"noal@example.com"};

createUser(newUser);

function createCourse():{name: string, price: number}{
    return {name: "react", price: 0}; 
} */

/* type User = {
    name: string;
    email: string;
    isActive: boolean
} 

function createUser(user: User): User{
    return {name: "", email: "", isActive: false}; 
}

createUser({name: "", email: "", isActive: false}); */

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credit?: number
}

let myUser: User = {
    _id: "test",
    name: "h",
    email: "test@test.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "test@gmail.com"
//myUser._id = "aaa";
export {}
