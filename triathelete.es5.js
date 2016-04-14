var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Activity = (function () {
  function Activity(pAvgSpeed) {
    this.avgSpeed = pAvgSpeed;
  }

  Activity.prototype.getAvgSpeed = function () {
    return this.avgSpeed;
  };

  Activity.prototype.getTravelTime = function (distance) {
    return distance / this.avgSpeed;
  };

  return Activity;
}());

var Runner = (function (_super) {
  __extends(Runner, _super);
  function Runner(pAvgSpeed) {
    _super.call(this, pAvgSpeed);
  }

  Runner.prototype.uphill = function () {
    console.log('My calves!');
  };

  Runner.prototype.run = function () {
    console.log('quick steps');
  };

  return Runner;
}(Activity));

var Biker = (function (_super) {
  __extends(Biker, _super);
  function Biker(pAvgSpeed) {
    _super.call(this, pAvgSpeed);
  }

  Biker.prototype.uphill = function () {
    console.log('Switching to an easier gear');
  };

  Biker.prototype.bike = function () {
    console.log('pedal pedal');
  };

  return Biker;
}(Activity));

var Swimmer = (function (_super) {
  __extends(Swimmer, _super);
  function Swimmer(pAvgSpeed) {
    _super.call(this, pAvgSpeed);
  }

  Swimmer.prototype.uphill = function () {
    console.log('How the hell is water uphill?');
  };

  Swimmer.prototype.swim = function () {
    console.log('stroke! stroke! stroke!');
  };

  return Swimmer;
}(Activity));

var MixinTriathelete = (function () {
  function MixinTriathelete() {
    this.avgSpeed = 0;
  }

  return MixinTriathelete;
}());

function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach(function (baseCtor) {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

applyMixins(MixinTriathelete, [Activity, Runner, Biker, Swimmer]);
console.log('---- Mixin Triathelete ----');
var SomeFitPerson = new MixinTriathelete();
SomeFitPerson.run();
SomeFitPerson.bike();
SomeFitPerson.swim();
console.log('Avg speed speed: ' + SomeFitPerson.getAvgSpeed());
console.log('Running 10 miles would take ' + SomeFitPerson.getTravelTime(10) + ' hours');
SomeFitPerson.uphill();
console.log('\n');
var SubClassedTriathelete = (function () {
  function SubClassedTriathelete(avgRunSpeed, avgBikeSpeed, avgSwimSpeed) {
    this.runner = new Runner(avgRunSpeed);
    this.biker = new Biker(avgBikeSpeed);
    this.swimmer = new Swimmer(avgSwimSpeed);
  }

  SubClassedTriathelete.prototype.run = function () {
    return this.runner;
  };

  SubClassedTriathelete.prototype.bike = function () {
    return this.biker;
  };

  SubClassedTriathelete.prototype.swim = function () {
    return this.swimmer;
  };

  return SubClassedTriathelete;
}());

console.log('---- Sub Classed Triathelete ----');
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
