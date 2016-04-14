class Animal2 {
  name: string;
  constructor(pName: string) {
    this.name = pName;
  }
  public eat(what: string) {
    console.log('Nom nom nom, this ' + what + ' is delicious');
  }
  public getName(): string {
    return this.name;
  }
}
class Bug2 {
  numLegs: number;
  constructor(pName: string, pNumLegs: number) {
    this.numLegs = pNumLegs;
  }
  public printIsCreepyAf() {
    console.log('I am creepy as fuck');
  }
  public printLegs() {
    console.log('I have ' + this.numLegs + ' legs');
  }
  public getLegs(): number {
    return this.numLegs;
  }
}
class Ant2 implements Animal2, Bug2 {
  // Animal2 Implementation
  name: string;
  eat: (what: string) => void;
  getName: () => string;
  // Bug2 Implementation
  numLegs: number;
  printIsCreepyAf: () => void;
  printLegs: () => void;
  getLegs: () => number;
  // Ant2 Implementation
  private bitePain: number;
  constructor(pName: string, pBitePain: number) {
    this.name = pName;
    this.numLegs = 6;
    this.bitePain = pBitePain;
  }
  public printIsLiveInColony() {
    console.log('I live to serve my queen and my colony')
  }
  public printBitePain() {
    console.log('My bite feels like a ' + this.bitePain + ' on a 10 point scale');
  }
  public hi() {
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
