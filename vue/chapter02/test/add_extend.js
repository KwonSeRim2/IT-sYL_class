class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

//상속 키워드는 extends
class Bicycle extends Vehicle {
  constructor(name, wheel, color) {
    super(name, wheel);

    this.color = color;
  }
}
const myBicycle = new Bicycle('자전거', 2, 'red');
console.log(myBicycle);
