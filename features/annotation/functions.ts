const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    // we wanted to return a number but forgot to add the return statment. so typecript is inferring the function's return type as void. for this reason we need to infer the return type upon the declaration
    a - b;
};

const subtractWithAnnotation = (a: number, b: number): number => {
    return a - b;
};
