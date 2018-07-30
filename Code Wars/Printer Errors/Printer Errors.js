function printerError(s) {
    // your code
    return `${s.match(/[n-z]/g).length}/${s.length}`;
}