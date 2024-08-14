//const user: (string | number) [] = [1, "test"];
const user:  [string,number,boolean] = ["test",1,true];

let rgb: [number,number, number] = [0,0,0];

type User = [number, string]

const newUser : User = [112, "test@gmail.com"]

newUser[1] = "t@gmail.com"
newUser.push(2)

export {}