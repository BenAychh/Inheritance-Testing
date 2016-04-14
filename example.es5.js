var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Animal = (function () {
  function Animal(pName) {
    this.name = pName;
  }

  Animal.prototype.eat = function (what) {
    console.log('Nom nom nom, this ' + what + ' is delicious');
  };

  Animal.prototype.getName = function () {
    return this.name;
  };

  return Animal;
}());

var Bug = (function (_super) {
  __extends(Bug, _super);
  function Bug(pName, pNumLegs) {
    _super.call(this, pName);
    this.numLegs = pNumLegs;
  }

  Bug.prototype.printIsCreepyAf = function () {
    console.log('the ' + this.getName() + ' is creepy as fuck');
  };

  Bug.prototype.printLegs = function () {
    console.log('the ' + this.getName() + ' has ' + this.numLegs + ' legs');
  };

  Bug.prototype.getLegs = function () {
    return this.numLegs;
  };

  return Bug;
}(Animal));

var Ant = (function (_super) {
  __extends(Ant, _super);
  function Ant(pName, pBitePain) {
    _super.call(this, pName, 6);
    this.bitePain = pBitePain;
  }

  Ant.prototype.printIsLiveInColony = function () {
    console.log('I live to serve my queen and my colony');
  };

  Ant.prototype.printBitePain = function () {
    console.log('My bite feels like a ' + this.bitePain + ' on a 10 point scale');
  };

  Ant.prototype.hi = function () {
    console.log('Hi, I am a ' + this.getName());
  };

  return Ant;
}(Bug));

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
