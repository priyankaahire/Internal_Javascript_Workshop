//% Memoize is a technique which caches results of function calls
//% It can be written as a proxy in JS or even using clouser


function memoize(tragetFunction) {
    const cache ={};//* Objecr acting as a cache in clouser

    return function(argToTarget) {
        //* Either return from the cache or call function to ache

        if( cache[argToTarget] == undefined) {
            cache[argToTarget] = tragetFunction(argToTarget);
        }
        return cache[argToTarget];
    }


}

//! Expensive compute function
function isPrime(value) {
    const sqrt = Math.sqrt(value);
    let div;

    for(div=2; div<= sqrt; div++) {
        if (value%div == 0) {
            console.log(`Executed ${div-1} times`);
            return false;
        }
    }
    console.log(`Excuted ${div-1} times`);
    return true;
}

//~! #without memoize, it computes every times 
console.log("isPrime", isPrime(999_999_000_001)); //> Excuted 999999 times
console.log("isPrime", isPrime(999_999_000_001)); //> Excuted 999999 times

//~* Memoie wraps the functions and caches previous calls
const primeChecker = memoize(isPrime);
console.log("isPrime", primeChecker(999_999_000_001)); //> Excuted 999999 times
console.log("isPrime", primeChecker(999_999_000_001)); //^ Served from memoize cache
