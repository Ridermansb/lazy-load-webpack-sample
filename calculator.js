const Calculator = (function () {
    const numbers = [];

    function Calculator() { }

    Calculator.prototype.sum = async function () {
        const { default: sum } = await import('./sum');
        return numbers.reduce((acc, next) => {
            acc = sum(acc, next);
            return acc;
        });
    };

    Calculator.prototype.divide = async function () {
        const { default: divide } = await import('./divide');
        return numbers.reduce((acc, next) => {
            acc = divide(acc, next);
            return acc;
        });
    };

    Calculator.prototype.enter = function (number) {
        numbers.push(number);
    };

    return Calculator;
})();

export default Calculator