interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string
    startTrail(): string,
    getCoupon: (couponname: string, value: number) => number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "tester"
}

const noal: Admin = { dbId: 22, 
                     email: "noal@example.com",
                     role: "admin",
                     githubToken: "github", 
                     userId: 1111, 
                     startTrail: () => { return "Started" },
                     getCoupon: () => {return 10} }
noal.email = "noal@gmail.com"
// noal.dbId = 1
