const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainArr = [];

const chainMaker = {
  getLength() {
    //console.log('chainArr.length', chainArr.length);
    return chainArr.length;
  },
  addLink(value) {
    if (value === "") {
      chainArr.push(`( )`);
    } else {
      chainArr.push(`( ${value} )`);
    }
    //console.log('ADD', chainArr, 'With length', chainArr.length);
    return this;
  },
  removeLink(position) {
    let remPosition = position - 1;
    if (!Number.isInteger(position) || remPosition < 0 || position > chainArr.length) {
      //console.log("position > chainArr.length", position, chainArr.length);
      //console.log(`You can't remove incorrect link!`, position);
      chainArr = [];
      throw Error(`You can't remove incorrect link!`);
    } else {
      //console.log("Not position > chainArr.length", position, chainArr.length);
      chainArr.splice(remPosition, 1);
    }
    //console.log('REMOVE', chainArr, 'With length', chainArr.length);
    return this;
  },
  reverseChain() {
    chainArr.reverse();
    //console.log(chainArr);
    return this;
  },
  finishChain() {
    let finish = chainArr.join('~~');
    chainArr = [];
    //console.log(finish);
    return finish;
  }
};

chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(); 
//'( NaN )~~( null )~~( true )~~( false )~~( 1.233 )

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd');
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);

// deepEqual(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);

// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
// '( 3rd )~~( function () { } )')    
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain(); // => '( 2 )~~( 1 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
module.exports = {
  chainMaker
};
