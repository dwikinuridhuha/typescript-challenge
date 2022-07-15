// @ts-ignore
import * as readline from 'node:readline';
import {stdin, stdout} from 'process';

import * as FizzBuzz from "./FizzBuzz";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

let algoFizzBuzz = new FizzBuzz.AlgoFizzBuzz.FizzBuzzImpl();

const functionFizzBuzz = () => {
    rl.question("Masukan Sebuah Angka? ", function (answer: string) {
        const number: number = <number><unknown>answer;

        if (isNaN(number)) {
            console.log("inputan hanya boleh angka");
            rl.close();
        } else {
            algoFizzBuzz.setNum(number);
            console.log(algoFizzBuzz.checkFizzBuss());
            rl.close();
        }
    });
};

console.log("FizzBuzz Checker");
functionFizzBuzz();

