function outer(){
    //Some dynamic programming
	let mem = [0, 1];
	return function fib(n){
		if (n == 0) return 0;
		else if (n < 2){
 			return 1;
        }
        //return 0, 1 initially
		else if (mem[n]){
            //if its already calculated return the result
            return mem[n];
        }
		else {
            //otherwise calculate and save it
			return mem[n] = fib(n-1) + fib(n-2);
        }	
    }
}

//                 fib(5)
//             fib(4) fib(3)
//         fib(3)  fib(2)  fib(1)
//     fib(2)  fib(1) 
// fib(1)  fib(0)
//First the top left row will be calculated afterwards the stuff memonized will be used