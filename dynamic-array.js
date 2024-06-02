class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
    this.length = 0; // Actuall length based on amount of values

  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;

  }

  pop() {

    // Your code here
    const element = this.data[this.length - 1];

    this.data[this.length - 1] = undefined;
    if (this.length > 0) this.length--;

    return element;
  }

  shift() {

    // Your code here
    // We we are going to do sort everything to the left.

    const result = this.read(0);

    for (let i = 0; i < this.length; i++) {

      if (i === 0) {
        this.data[i] = undefined;
      } else {

        [this.data[i - 1], this.data[i]] = [this.data[i], this.data[i - 1]];
      }

    }

    if (this.length > 0) this.length--;

    return result;
  }

  unshift(val) {

    // Your code here
    // move everything to the right
    // Note: Space complexity is O(1)

    let temp = this.read(1);
    let num = this.read(0);

    for (let i = 1; i < this.length + 1; i++) {

      if (this.length === this.capacity) this.resize();

      this.data[i] = num;
      num = temp;
      temp = this.read(i + 1);
    }

    this.data[0] = val;
    this.length++;

    return this.data
  }

  indexOf(val) {

    // Your code here
    // Time: O(n)
    // Space: O(1)

    for (let i = 0; i < this.length; i++ ) {
      const char = this.data[i];

      if (char === val) return i;
    }

    return -1;
  }

  resize() {

    // Your code here
    // Don't use Array.push
    this.capacity = (this.capacity * 2);
    const arr = new Array((this.capacity));

    for (let i = 0; i < this.length; i++) {
      arr[i] = this.data[i];
    }

    this.data = arr;
  }

}


module.exports = DynamicArray;
