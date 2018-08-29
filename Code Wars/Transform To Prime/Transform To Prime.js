function minimumNumber(numbers) {
    let sum = numbers.reduce((a, c) => a + c);
    let primeFound = false;
    let num = sum;
    while (!primeFound) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                break;
            }
            if (i == num - 1) {
                primeFound = true;
                break;
            }
        }
        num++;
    }
    return --num - sum;
}