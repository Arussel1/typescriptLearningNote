const scores: Array<number> = [] 
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{  return val; }

function identityTwo(val: any):any { return val; }

function identityThree<Type>(val: Type): Type { return val; }

// identityThree("3");

function identityFour<T>(val: T): T{ return val; }

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Coca Cola", type: 1});

function getSearchProducts<T>(product: T[]): T{
    //do some database operations
    const myIndex = 3
    return product[myIndex];
}

const getProducts = <T,>(product: T[]): T =>{
    //do some database operations
    const myIndex = 4
    return product[myIndex]
}

interface DB{
    connection: string,
    username: string,
    password: string
}

function getProductsTwo<T, U extends DB>( val1:T, val2:U ): object {
    return {
        val1,
        val2
    }
}

// getProductsTwo(3, {})

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}