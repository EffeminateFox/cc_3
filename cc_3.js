class Car {
    /**
     * Creates a new Car instance.
     * @param {string} make - The brand of the car.
     * @param {number} speed - The current speed of the car in km/h.
     */
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    /**
     * Increases the car's speed by 10 km/h and logs the new speed.
     */
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    /**
     * Decreases the car's speed by 5 km/h and logs the new speed.
     */
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

module.exports = Car;

