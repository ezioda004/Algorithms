function chain(fns) {
    var someObj = {
        computedValue: "",
        execute: function () {
            return this.computedValue;
        },

        sum: function (a, b = this.computedValue) {
            return Object.assign({}, this, {
                computedValue: fns.sum(a, b)
            });
        },

        minus: function (...args) {
            let a, b;
            if (args.length == 1) {
                a = this.computedValue;
                b = args[0];
            } else {
                a = args[0];
                b = args[1];
            }
            return Object.assign({}, this, {
                computedValue: fns.minus(a, b)
            });
        },

        double: function (a = this.computedValue) {
            return Object.assign({}, this, {
                computedValue: fns.double(a)
            });
        },

        addOne: function (a = this.computedValue) {
            return Object.assign({}, this, {
                computedValue: fns.addOne(a)
            });
        },
        addOneArr: function (arr = this.computedValue) {
            return Object.assign({}, this, {
                computedValue: arr.map(val => val + 1)
            })

        }

    }
    return someObj;

}