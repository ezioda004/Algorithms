function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    this.add = function(val){
        if (!collection.includes(val)){
          collection.push(val);
          return true;
        }
        return false;
    }
}