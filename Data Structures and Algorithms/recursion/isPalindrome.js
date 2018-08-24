// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if (str.length < 2) return true;
    return str.slice(-1) == str[0] ? isPalindrome(str.slice(1, str.length-1)) : false;
    
  }