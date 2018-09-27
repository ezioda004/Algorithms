/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function(dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  let str = func.toString();
  let arr = str
    .slice(str.indexOf("(") + 1, str.indexOf(")"))
    .split(", ")
    .reduce(
      (a, c) => (this.dependency[c] ? a.push(this.dependency[c]) && a : a),
      []
    );
  return () => func(...arr);
};
