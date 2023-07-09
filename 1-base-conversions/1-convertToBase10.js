// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // select between binary or hexadecimal operation
  let num = str.split("");

  function binToDec(n) {
    let num = 0;
    let power = 0;
    for(let i = n.length-1; i >= 0; i--) {
      let bit = n[i]
      if(bit === "1") {
        num += Math.pow(2, power)
      }
      power++;
    }
    return num
  }

  function hexToDec(n) {
    let num = 0;
    let power = 0;
    for(let i = n.length-1; i >= 0; i--) {
      let bit = n[i];
      if(bit >= 0 && bit <= 9) {
        num += bit * Math.pow(16, power)
      } else {
        let value = 0
        if(bit === "a") {
          value = 10
        } else if(bit === "b") {
          value = 11
        } else if(bit === "c") {
          value = 12
        } else if(bit === "d") {
          value = 13
        } else if(bit === "e") {
          value = 14
        } else if(bit === "f") {
          value = 15
        }
        num += value * Math.pow(16, power)
      }
      power++
    }
    return num;
  }

  if(num[1] === "b") {
    num.shift();
    num.shift();
    let n = num.join("");
    return binToDec(n);
  } else {
    num.shift();
    num.shift();
    let n = num.join("");
    return hexToDec(n);
  }
};



/* Also exists method parseInt(number, 2)*/
/* Also exists method parseInt(number, 16)*/
/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
