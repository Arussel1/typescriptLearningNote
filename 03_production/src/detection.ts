function detectType(val: number | string){
    if(typeof val === "string")  return val.toLowerCase();
    return val + 3
}

function provideId(id: string | null){
    if(!id) {
        console.log("Please provide an ID");
        return 
    }
    return id.toLowerCase();
}

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccout(account: User | Admin): boolean {
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

interface Circle{
    kind: "circle",
    radius: number 
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle"
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }

    //return shape.side ** 2
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}

