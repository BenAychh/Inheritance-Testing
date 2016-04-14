class Activity {
  avgSpeed: number;
  constructor(pAvgSpeed: number) {
    this.avgSpeed = pAvgSpeed;
  }
  public getAvgSpeed() {
    return this.avgSpeed;
  }
  public getTravelTime(distance: number) {
    return distance / this.avgSpeed;
  }
}

class Runner extends Activity {
  constructor(pAvgSpeed: number) {
    super(pAvgSpeed);
  }
  public uphill() {
    console.log('My calves!')
  }
  public run() {
    console.log('quick steps');
  }
}

class Biker extends Activity {
  constructor(pAvgSpeed: number) {
    super(pAvgSpeed)
  }
  public uphill() {
    console.log('Switching to an easier gear');
  }
  public bike() {
    console.log('pedal pedal');
  }
}

class Swimmer extends Activity {
  constructor(pAvgSpeed: number) {
    super(pAvgSpeed);
  }
  public uphill() {
    console.log('How the hell is water uphill?');
  }
  public swim() {
    console.log('stroke! stroke! stroke!');
  }
}

class MixinTriathelete implements Runner, Biker, Swimmer {
  avgSpeed: number = 0;
  getAvgSpeed: () => number;
  getTravelTime: (distance: number) => number;
  run: () => void;
  bike: () => void;
  swim: () => void;
  uphill: () => void;
}

function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
applyMixins(MixinTriathelete, [Activity, Runner, Biker, Swimmer]);

console.log('---- Mixin Triathelete ----')
var SomeFitPerson = new MixinTriathelete();
SomeFitPerson.run();
SomeFitPerson.bike();
SomeFitPerson.swim();
console.log('Avg speed speed: ' + SomeFitPerson.getAvgSpeed());
console.log('Running 10 miles would take ' + SomeFitPerson.getTravelTime(10) + ' hours');
SomeFitPerson.uphill();
console.log('\n');

class SubClassedTriathelete {
  private runner: Runner;
  private biker: Biker;
  private swimmer: Swimmer;
  constructor(avgRunSpeed: number, avgBikeSpeed: number, avgSwimSpeed: number) {
    this.runner = new Runner(avgRunSpeed);
    this.biker = new Biker(avgBikeSpeed);
    this.swimmer = new Swimmer(avgSwimSpeed);
  }
  public run() {
    return this.runner;
  }
  public bike() {
    return this.biker;
  }
  public swim() {
    return this.swimmer;
  }
}

console.log('---- Sub Classed Triathelete ----')
var StillNotBen = new SubClassedTriathelete(6, 18, 3);
console.log('Avg run speed: ' + StillNotBen.run().getAvgSpeed());
console.log('Running 10 miles would take ' + StillNotBen.run().getTravelTime(10) + ' hours');
StillNotBen.run().run();
StillNotBen.run().uphill();
console.log('\n');
console.log('Avg bike speed: ' + StillNotBen.bike().getAvgSpeed());
console.log('Biking 10 miles would take ' + StillNotBen.bike().getTravelTime(10) + ' hours');
StillNotBen.bike().bike();
StillNotBen.bike().uphill();
console.log('\n');
console.log('Avg swim speed: ' + StillNotBen.swim().getAvgSpeed());
console.log('Swimming 10 miles would take ' + StillNotBen.swim().getTravelTime(10) + ' hours');
StillNotBen.swim().swim();
StillNotBen.swim().uphill();
