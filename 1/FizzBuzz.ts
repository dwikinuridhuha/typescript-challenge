export namespace AlgoFizzBuzz {
    interface FizzBuzz {
        setNum(num: number): void;

        checkFizzBuss(): string
    }

    export class FizzBuzzImpl implements FizzBuzz {
        private num: number = 0;

        setNum(num: number): void {
            this.num = num;
        }

        checkFizzBuss(): string {
            if (this.num % 15 == 0) {
                return "FizzBuzz";
            } else if (this.num % 3 == 0) {
                return "Fizz";
            } else if (this.num % 5 == 0) {
                return "Buzz";
            } else {
                return "Not Fizz Buzz";
            }
        }

    }
}