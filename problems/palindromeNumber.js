var isPalindrome = function(x) {
  let reversed = x.toString().split("").reverse().join("")

  return (x.toString() === reversed);
};

console.log(isPalindrome(-121))
