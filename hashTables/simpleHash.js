function simpleHash(str) {
    let hashValue = 0;
    for(let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
        // console.log(str.charCodeAt(i))
    }
    return hashValue;
}
// Same input, same output
console.log(simpleHash("Hello, world!"));  // 1161
console.log(simpleHash("Hello, world!"));  // 1161

// Different input, different output
console.log(simpleHash("ABC"));            // 198
console.log(simpleHash("abc"));            // 294

// Some different inputs can lead to the same outputs
console.log(simpleHash("ABCDEF"));         // 405
console.log(simpleHash("ABBEEF"));         // 405
console.log(simpleHash("zbeT"));           // 405
