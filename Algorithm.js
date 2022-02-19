function largestPrimeFactor(number) {
    let prime = 2,
      max = 1;
    while (prime <= number) {
      if (number % prime == 0) {
        max = prime;
        number = number / prime;
      } else prime++; //Only increment the prime number if the number isn't divisible by it
    }
    return max;
  }
//   console.log(largestPrimeFactor(600851475143));
function largestPalindromeProduct(n) {
    //To get the maximum n digit number, + operator type castes String to Number type
    let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
  
    //Next we get minimum n digit number from the max
    let min = (max + 1) / 10;
  
    //To store the result
    let res = [];
  
    //Starting the loop from max to min
    for (let i = max; i >= min; i--) {
      //Another loop
      for (let j = max; j >= min; j--) {
        //Getting the product
        let num = i * j;
  
        //Reversing the number
        let numReverse = [...String(num)].reverse().join("");
  
        //Checking for palindromic number
        if (num == numReverse) {
          //Pushing the number into array and breaking the loop for efficiency
          res.push(num);
          break;
        }
      }
    }
  
    // Returning the maximum of the result array
    return Math.max(...res);
  }
// console.log(largestPalindromeProduct(3))
//LCM of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  //Euclidean recursive algorithm
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  function smallestMult(n) {
    let maxLCM = 1;
  
    //Getting the LCM in the range
    for (let i = 2; i <= n; i++) {
      maxLCM = lcm(maxLCM, i);
    }
    return maxLCM;
  }
console.log(smallestMult(20))  