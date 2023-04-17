const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
    this.alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(message, code) {

    if (message === undefined || code === undefined) {
      throw new Error('Incorrect arguments!');
    } else {

      let messageUp = message.toUpperCase();
      let codeUp = code.toUpperCase();
      //console.log(this.alpha);
  
      let template = '';
      let fromCodeNumber = 0;
      for (let i = 0; i < messageUp.length; i++) {
        let codeChar = codeUp[ fromCodeNumber % codeUp.length ];
        //console.log('CodeChar', codeChar);
        let diff = this.alpha.indexOf(codeChar);
  
        let char = messageUp[i];
  
        if (this.alpha.includes(char)) {
          let charIndex = (diff + this.alpha.indexOf(char)) % this.alpha.length;
          template += this.alpha[charIndex];
          fromCodeNumber += 1;
          //console.log(fromCodeNumber);
        } else {
          template += char;
        }
      }
      //console.log(template);
      return this.value ? template : template.split('').reverse().join('');
    }
  }

  decrypt(message, code) {
    if (message === undefined || code === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      //console.log(code);
      let codeUp = code.toUpperCase();
      //console.log('code Upper', code);
      codeUp = Array.from(codeUp).map((char) => {
          let position = this.alpha.indexOf(char);
          return this.alpha[(this.alpha.length - position) % this.alpha.length];
        }).join('');
  
      return this.encrypt(message, codeUp);
    }
  }
}

// const directMachine = new VigenereCipheringMachine();

// directMachine.encrypt('attack at dawn!', 'alphonse'); //'AEIHQX SX DLLU!');

module.exports = {
  VigenereCipheringMachine
};
