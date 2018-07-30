function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce((accum, curr) => curr > 0 ? ++accum[0] && accum : !(void (accum[1] += curr)) && accum, [0, 0]) : [];
}