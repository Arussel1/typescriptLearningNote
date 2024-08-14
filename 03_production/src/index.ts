/*console.log("Hello World from TS");
console.log("Hello World from TS 2"); */



/* class User{
    public email: string
    name: string 
    private readonly city: string = "Tokyo"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
} */

class User {

    protected _courseCount = 1

    private readonly city: string = "Tokyo"
    constructor(public email: string, public name: string, /* private userId: string */){

    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount
    }

    // When use setter in ts, there is no return type allowed
    set courseCount(courseNumber){
        if(courseNumber <= 1){
            throw new Error("Course should be more than 1");
        }
        this._courseCount = courseNumber;
    }

}

class SubUser extends User {
    
    isFamily:boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }   

}

const noal = new User("noal@example.com", "noal")
// noal.city = "Toronto"
//noal.city

//noal.deleteToken()