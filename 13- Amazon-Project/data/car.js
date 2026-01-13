console.log("car.js loaded");

class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo() {
    console.log(
      `Brand: ${this.#brand} | Model: ${this.#model} | Speed: ${
        this.speed
      } km/h | TrunkOpen: ${this.isTrunkOpen}`
    );
  }

  go() {
    if (this.isTrunkOpen) {
      return;
    }

    if (this.speed + 5 <= 200) {
      this.speed += 5;
      console.log(this.speed);
    }
  }

  brake() {
    if (this.speed - 5 >= 0) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed + this.acceleration < 300) {
      this.speed += this.acceleration;
    } else {
      this.speed = 300;
    }
  }

  openTrunk() {}

  closeTrunk() {}
}

const carObject1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const carObject2 = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

carObject1.go();
carObject1.brake();
carObject1.displayInfo();
carObject1.openTrunk();
carObject1.closeTrunk();

carObject2.go();
carObject2.brake();
carObject2.openTrunk();
carObject2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();

raceCar.go();
raceCar.displayInfo();

/* console.log(carObject1);
console.log(carObject2); */
