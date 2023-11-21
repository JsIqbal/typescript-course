const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    // we wanted to return a number but forgot to add the return statment. so typecript is inferring the function's return type as void. for this reason we need to infer the return type upon the declaration
    a - b;
};

const subtractWithAnnotation = (a: number, b: number): number => {
    // annotation for an arrow function
    return a - b;
};

function devide(a: number, b: number): number {
    // annotation for a function
    return a / b;
}

const multiply = function (a: number, b: number): number {
    // annotation of annonymous function
    return a * b;
};

const logger = (message: string): void => {
    // not returning anything
    console.log(message);
};

const throwError = (message: string): never => {
    // never want to return anything ever!
    throw new Error(message);
};

const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
