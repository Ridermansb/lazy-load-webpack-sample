async function main() {
    const { default: Calculator } = await import('./calculator');

    const calc = new Calculator();

    calc.enter(2);
    calc.enter(2);

    calc.sum().then(total => console.log(total));
    calc.divide().then(total => console.log(total));
}

main();
