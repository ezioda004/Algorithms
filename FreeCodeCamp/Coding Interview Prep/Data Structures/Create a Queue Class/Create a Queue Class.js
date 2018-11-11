//ES5 < way

function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(val){
        collection.push(val);
    };
    this.dequeue = function(){
        return collection.shift();
    }
    this.front = function(){
        return collection[0];
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}
// ES6 way

class Queue {
    constructor(){
        this.collection = {};
        this.start = 0;
        this.end = 0;
    }
    print(){
        console.log(this.collection);
    }
    enqueue(val){
        this.collection[this.end++] = val; 
    }
    dequeue(){
        return this.collection[this.start++];
    }
    front(){
        return this.collection[this.start];
    }
    size(){
        return this.end - this.start;
    }
    isEmpty(){
        return this.size() === 0;
    }
}