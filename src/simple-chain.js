const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value === undefined ? this.chain.push(`(   )~~`) : this.chain.push(`( ${value} )~~`);
    return this;  
  },
  removeLink(position) {
    if(position > 0) { 
    this.chain.splice(position-1, 1);
    return this;
    } else {
      this.chain = [];
      throw new Error ('Wrong link');
    }    
  },
  reverseChain() {
    this.chain.reverse();
    return this;  
  },
  finishChain() {
    let res = this.chain.join('').slice(0, -2);
    this.chain = [];
    return res;
  },
  
};

module.exports = chainMaker;
