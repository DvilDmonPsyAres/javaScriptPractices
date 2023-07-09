class DynamicArray extends Array{

    constructor(defaultSize = 4) {
      super();
      this.length = 0;
      this.capacity = defaultSize;
      this.data = new Array(defaultSize);
    }

    read(index) {

      return this.data[index];
    }

    unshift(val) {

      let newArr = new Array(this.length + 1);
      for(let i = this.length - 1; i >= 0; i--) {
        newArr[i+1] = this.data[i];
      }
      newArr[0] = val
      this.data = newArr;
      this.length = this.data.length;

    }

  }
  let arr = new DynamicArray(8)
  console.log(arr);
  arr.unshift(3)
  console.log(arr.data[0])
  console.log(arr);
  arr.unshift(9)
  console.log(arr.data[0])
  console.log(arr);

  module.exports = DynamicArray;
