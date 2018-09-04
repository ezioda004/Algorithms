var uniqueInOrder = function ([...iterable]) {
    if (iterable.length == 0) return [];
    let finalArr = [iterable[0]];
    for (let i = 1; i < iterable.length; i++) {
        if (!(iterable[i] == iterable[i - 1])) finalArr.push(iterable[i]);
    }
    return finalArr;
}