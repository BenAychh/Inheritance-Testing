'use strict';
class Animal2 {
  constructor(pName) {
    this.name = pName;
  }

  eat(what) {
    console.log('Nom nom nom, this ' + what + ' is delicious');
  }

  getName() {
    return this.name;
  }
}
class Bug2 {
  constructor(pName, pNumLegs) {
    this.numLegs = pNumLegs;
  }

  printIsCreepyAf() {
    console.log('I am creepy as fuck');
  }

  printLegs() {
    console.log('I have ' + this.numLegs + ' legs');
  }

  getLegs() {
    return this.numLegs;
  }
}
class Ant2 {
  constructor(pName, pBitePain) {
    this.name = pName;
    this.numLegs = 6;
    this.bitePain = pBitePain;
  }

  printIsLiveInColony() {
    console.log('I live to serve my queen and my colony');
  }

  printBitePain() {
    console.log('My bite feels like a ' + this.bitePain + ' on a 10 point scale');
  }

  hi() {
    console.log('Hi, I am a ' + this.getName());
  }
}
function applyMixins2(derivedCtor, baseCtors) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

applyMixins2(Ant2, [Animal2, Bug2]);
console.log('---- FireAnt2 ----');
var FireAnt2 = new Ant2('Fire Ant', 5);
FireAnt2.hi();
FireAnt2.eat('Arthropod Egg');
FireAnt2.printIsCreepyAf();
FireAnt2.printLegs();
FireAnt2.printIsLiveInColony();
FireAnt2.printBitePain();
console.log('\n');
console.log('---- SugarAnt2 ----');
var SugarAnt2 = new Ant2('Sugar Ant', 1);
SugarAnt2.hi();
SugarAnt2.eat('Sugar');
SugarAnt2.printIsCreepyAf();
SugarAnt2.printLegs();
SugarAnt2.printIsLiveInColony();
SugarAnt2.printBitePain();
