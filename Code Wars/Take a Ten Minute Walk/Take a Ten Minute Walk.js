function isValidWalk(walk) {
    if (walk.length != 10) return false;
    let dic = {
        n: 0,
        e: 0
    };
    for (let dir of walk) {
        (dir == "n" || dir == 'e') 
        ? dic[dir]++
         : dir == "s" 
            ? --dic['n'] 
            : --dic['e'];
return Object.values(dic).reduce((a, c) => a + c) == 0;
}