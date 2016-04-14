'use strict';
class Animal {
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
class Bug extends Animal {
  constructor(pName, pNumLegs) {
    super(pName);
    this.numLegs = pNumLegs;
  }

  printIsCreepyAf() {
    console.log('the ' + this.getName() + ' is creepy as fuck');
  }

  printLegs() {
    console.log('the ' + this.getName() + ' has ' + this.numLegs + ' legs');
  }

  getLegs() {
    return this.numLegs;
  }
}
class Ant extends Bug {
  constructor(pName, pBitePain) {
    super(pName, 6);
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
var Lion = new Animal('Lion');
Lion.eat('Antelope');
console.log('\n');
var Spider = new Bug('Spider', 8);
Spider.eat('Fly');
Spider.printIsCreepyAf();
Spider.printLegs();
console.log('\n');
var FireAnt = new Ant('Fire Ant', 5);
FireAnt.hi();
FireAnt.eat('Arthropod Eggs');
FireAnt.printIsCreepyAf();
FireAnt.printLegs();
FireAnt.printIsLiveInColony();
FireAnt.printBitePain();
console.log('\n');
var SugarAnt = new Ant('Sugar Ant', 1);
SugarAnt.hi();
SugarAnt.eat('Sugar');
SugarAnt.printIsCreepyAf();
SugarAnt.printLegs();
SugarAnt.printIsLiveInColony();
SugarAnt.printBitePain();
