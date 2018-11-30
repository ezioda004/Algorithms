function Set() {
    var collection = [];
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    this.values = function() {
        return collection;
    };
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    this.remove = function(element){
        if (this.has(element)){
            collection.splice(collection.indexOf(element), 1);
            return true;
        }
        return false;
    }
}