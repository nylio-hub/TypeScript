// Тип аннотации
let id: number = 5;
let company: string = "Corporation";
let isPublished: boolean = true;
let tags: string[] = ["TypeScript", "JavaScript"];

// Просто явное использование any)
let x: any = 10;

console.log({ id, company, isPublished, tags, x });

// Интерфейсы и опциональные поля
interface User {
    id: number;
    name: string;
    age?: number;
    greet: (message: string) => void;
}

const user: User = {
    id: 1,
    name: "Lena",
    greet: (message: string) => console.log(message),
};

console.log(user.age === undefined ? "No age of the user" : user.age);
user.greet("Hello from User.greet()");

// Типы функции: параметры и return type
function concatValues(a: string, b: string): string {
    return a + " " + b;
}

console.log(concatValues("hello", "world"));

// Union (строка или число) + type alias
type Id = string | number;

function printId(value: Id): void {
    console.log(`ID is equal to ${value}`);
}

printId("ID 123");
printId(123);

// Склейка двух интерфейсов
interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity;

function signContract(employee: Employee): void {
    console.log(`Contract signed by ${employee.name}, email: ${employee.name}, creditScore: ${employee.creditScore}`);
}

signContract({
    name: "Lena",
    creditScore: 800,
    id: 18,
    email: "gallilena2007@gmail.com",
});

// Enum
enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "no_user",
    WrongCredentials = "wrong_credentials",
    Internal = "internal",
}

function printLoginErrorMessage(error: LoginError): void {
    switch (error) {
        case LoginError.Unauthorized:
            console.log("User not authorized");
            return;
        case LoginError.NoUser:
            console.log("No user was found with that username");
            return;
        case LoginError.WrongCredentials:
            console.log("Wrong credentials");
            return;
        default:
            console.log("Internal error");
            return;
    }
}

printLoginErrorMessage(LoginError.Unauthorized);
printLoginErrorMessage(LoginError.NoUser);
printLoginErrorMessage(LoginError.WrongCredentials);
printLoginErrorMessage(LoginError.Internal);

// Generics
class StorageContainer<T> {
    private contents: T[] = [];

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(index: number): T | undefined {
        return this.contents[index];
    }
}

const usernames =  new StorageContainer<string>();
usernames.addItem("Lena");
usernames.addItem("Echo BR");
console.log(usernames.getItem(0));

const friendCounts = new StorageContainer<number>();
friendCounts.addItem(18);
friendCounts.addItem(56);
console.log(friendCounts.getItem(1));

interface EmployeeReadOnly {
    readonly employeeId: number;
    name: string;
    readonly startDate: Date;
    department: string;
}

const emp: EmployeeReadOnly = {
    employeeId: 1,
    name: "Lena",
    startDate: new Date(),
    department: "Finance",
};

emp.name = "Jessiaca";

console.log(emp);

