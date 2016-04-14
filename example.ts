class Animal {
  private name: string;
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
class Bug extends Animal {
  private numLegs: number;
  constructor(pName: string, pNumLegs: number) {
    super(pName);
    this.numLegs = pNumLegs;
  }
  public printIsCreepyAf() {
    console.log('the ' + this.getName() + ' is creepy as fuck');
  }
  public printLegs() {
    console.log('the ' + this.getName() + ' has ' + this.numLegs + ' legs');
  }
  public getLegs(): number {
    return this.numLegs;
  }
}
class Ant extends Bug {
  private bitePain: number;
  constructor(pName: string, pBitePain: number) {
    super(pName, 6);
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
