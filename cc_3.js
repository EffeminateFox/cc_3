// Car class definition
class Car {
    /**
     * Creates a new Car instance.
     * @param {string} make - The brand of the car, string contributes to the name of the instance.
     * @param {number} speed - The current speed of the car in km/h, nmumber contributes to the speed of the instance.
     */
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    /**
     * Increases the car's speed by 10 and log the new speed.
     */
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    /**
     * Decreases the car's speed by 5 and log the new speed.
     */
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// Test the Car classes and implementations
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log("Testing BMW:");
car1.accelerate(); // BMW is going at 130 km/h
car1.brake(); // BMW is going at 125 km/h
car1.accelerate(); // BMW is going at 135 km/h
car1.brake(); // BMW is going at 130 km/h

console.log("\nTesting Mercedes:");
car2.accelerate(); // Mercedes is going at 105 km/h
car2.brake(); // Mercedes is going at 100 km/h
car2.accelerate(); // Mercedes is going at 110 km/h
car2.brake(); // Mercedes is going at 105 km/h
