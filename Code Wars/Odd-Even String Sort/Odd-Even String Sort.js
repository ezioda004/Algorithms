function sortMyString(S) {
    // your code here
    let even = "", odd = "";
    [...S].forEach((elem, i, arr) => {
      i % 2 == 0 ? even+= elem : odd += elem;
    });
    return even + " " + odd;
}