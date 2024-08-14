let score: number | string = 33;

score = 1;

score = "55";

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let noal: User | Admin = {name: "noal", id: 1220};

noal = {username: "na", id: 1220};

/*function getDbId( id: number| string){
    console.log(`id is: ${id}`);
}*/

getDbId(3)
getDbId("3");

function getDbId( id: number| string){
    if( typeof id === "string") id.toLowerCase();
}

//array

const data: (number | string)[] = [1, 2, 3, "4"];

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
//seatAllotment = "crew"