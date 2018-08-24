function stringifyNumbers(obj){
    let newObj = Object.assign({}, obj);
    for (let prop in newObj){
        if (typeof newObj[prop] == "object" && !Array.isArray(newObj[prop])){
            newObj[prop] = stringifyNumbers(newObj[prop]);
        }
        else if (typeof newObj[prop] == "number") {
            newObj[prop] = String(newObj[prop]);
        }
    }
    return newObj;
}
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/