#!/usr/bin/node

const Square = require('./5-square');

class SquareChild extends Square {
  charPrint(c) {
    const character = c || 'X';

    for (let i = 0; i < this.height; i += 1) {
      console.log(character.repeat(this.width));
    }
  }
}

module.exports = SquareChild;
