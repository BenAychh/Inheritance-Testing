var Animal2 = (function () {
  function Animal2(pName) {
    this.name = pName;
  }

  Animal2.prototype.eat = function (what) {
    console.log('Nom nom nom, this ' + what + ' is delicious');
  };

  Animal2.prototype.getName = function () {
    return this.name;
  };

  return Animal2;
}());

var Bug2 = (function () {
  function Bug2(pName, pNumLegs) {
    this.numLegs = pNumLegs;
  }

  Bug2.prototype.printIsCreepyAf = function () {
    console.log('I am creepy as fuck');
  };

  Bug2.prototype.printLegs = function () {
    console.log('I have ' + this.numLegs + ' legs');
  };

  Bug2.prototype.getLegs = function () {
    return this.numLegs;
  };

  return Bug2;
}());

var Ant2 = (function () {
  function Ant2(pName, pBitePain) {
    this.name = pName;
    this.numLegs = 6;
    this.bitePain = pBitePain;
  }

  Ant2.prototype.printIsLiveInColony = function () {
    console.log('I live to serve my queen and my colony');
  };

  Ant2.prototype.printBitePain = function () {
    console.log('My bite feels like a ' + this.bitePain + ' on a 10 point scale');
  };

  Ant2.prototype.hi = function () {
    console.log('Hi, I am a ' + this.getName());
  };

  return Ant2;
}());

function applyMixins2(derivedCtor, baseCtors) {
  baseCtors.forEach(function (baseCtor) {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
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
