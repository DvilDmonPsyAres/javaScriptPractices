// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
    function hexToBin(hex) {
    let num = hex.split("");
    num.shift();
    num.shift();
    let binary = ""
    for(let i = 0; i < num.length; i++) {
      let el = num[i];
      if(el === 0) {
        binary += "0000"
      } else if(el == 1) {
        binary += "0001"
      }else if(el == 2) {
        binary += "0010"
      }else if(el == 3) {
        binary += "0011"
      }else if(el == 4) {
        binary += "0100"
      }else if(el == 5) {
        binary += "0101"
      }else if(el == 6) {
        binary += "0110"
      }else if(el == 7) {
        binary += "0111"
      }else if(el == 8) {
        binary += "1000"
      }else if(el == 9) {
        binary += "1001"
      }else if(el == "a") {
        binary += "1010"
      }else if(el == "b") {
        binary += "1011"
      }else if(el == "c") {
        binary += "1100"
      }else if(el == "d") {
        binary += "1101"
      }else if(el == "e") {
        binary += "1110"
      }else if(el == "f") {
        binary += "1111"
      }
    }
    return "0b" + binary;
    }

  // function hexToBin(hex) {
  //   let num = hex.split("");
  //   num.shift();
  //   num.shift();
  //   let n = num.join("").toUpperCase();
  //   return "0b" + (parseInt(n, 16).toString(2)).padStart(4, '0');
  // }
  function decToBin(n) {
    let binary = ""
    if(n === 0) {
      return "0";
    }
    while(n > 0)  {
      let remainder = n % 2;
      binary = remainder + binary;
      n = Math.floor(n/2);
    }
    return "0b" + binary;
  }

  if(typeof(element) === "number") {
    return decToBin(element);
  } else {
    return hexToBin(element);
  }
};

/* Also exists method parseInt(number / 2)*/
/* Also exists method parseInt(n, 16).toString(2).padStart(4, '0')*/
/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
