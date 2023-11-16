let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "yellow"];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use annotations:
// 1) function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2 ) when we declare a variable on one line and initialize it later
// let fruit; // problematic
let fruit: boolean; // solution

const array = ["red", "green", "yellow", "orange"];

for (let i = 0; i < array.length; i++) {
    if (array[i] === "orange") {
        fruit = true;
    }
}

// 3) variables whose rtpe cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[1] > 0) {
        numberAboveZero = numbers[i];
    }
}
