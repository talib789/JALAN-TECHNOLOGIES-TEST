
 // method 1 
class CarServiceStation {
    // A map of service codes to service names and prices
    servicePrices = new Map([
        ['BS01', { name: 'Basic Servicing', hatchback: 2000, sedan: 4000, suv: 5000 }],
        ['EF01', { name: 'Engine Fixing', hatchback: 5000, sedan: 8000, suv: 10000 }],
        ['CF01', { name: 'Clutch Fixing', hatchback: 2000, sedan: 4000, suv: 6000 }],
        ['BF01', { name: 'Brake Fixing', hatchback: 1000, sedan: 1500, suv: 2500 }],
        ['GF01', { name: 'Gear Fixing', hatchback: 3000, sedan: 6000, suv: 8000 }],
    ]);

    generateBill(type, serviceCodes) {
        let total = 0;
        let services = '';

        // Iterate through the service codes
        for (const code of serviceCodes) {
            // Get the service name and price for the specified car type
            const service = this.servicePrices.get(code);
            const price = service[type];

            // Add the price to the total and append the service name to the services string
            total += price;
            services += `${service.name} - ₹ ${price}\n`;
        }

        // Check if the total bill is more than ₹10000 and add a complimentary cleaning if it is
        if (total > 10000) {
            services += 'Complimentary Cleaning\n';
        }

        // Return the bill with the total amount and list of services
        return `Type of Car - ${type}\n${services}Total Bill - ₹ ${total}`;
    }
}

const station = new CarServiceStation();

// Example usage:
console.log(station.generateBill('hatchback', ['BS01', 'EF01']));
// Output:
// Type of Car - hatchback
// Basic Servicing - ₹ 2000
// Engine Fixing - ₹ 5000
// Total Bill - ₹ 7000




 // Method 2 
class Car {
    constructor(type) {
        this.type = type;
    }
}

class Service {
    constructor(code, name, priceHatchback, priceSedan, priceSUV) {
        this.code = code;
        this.name = name;
        this.priceHatchback = priceHatchback;
        this.priceSedan = priceSedan;
        this.priceSUV = priceSUV;
    }

    getPrice(car) {
        if (car.type === "Hatchback") {
            return this.priceHatchback;
        } else if (car.type === "Sedan") {
            return this.priceSedan;
        } else if (car.type === "SUV") {
            return this.priceSUV;
        }
    }
}

class CarServiceStation {
    constructor() {
        this.services = [];
    }

    addService(service) {
        this.services.push(service);
    }

    getService(code) {
        for (const service of this.services) {
            if (service.code === code) {
                return service;
            }
        }
        return null;
    }

    getTotalPrice(car, services) {
        let totalPrice = 0;
        for (const code of services) {
            const service = this.getService(code);
            if (service) {
                totalPrice += service.getPrice(car);
            }
        }
        return totalPrice;
    }
}

// Example usage:
// Create a car service station

const stations = new CarServiceStation();

// Add some services
stations.addService(new Service("BASIC", "Basic Service", 1000, 2000, 3000));
stations.addService(new Service("ENGINE", "Engine Fixing", 5000, 10000, 15000));
stations.addService(new Service("CLUTCH", "Clutch Fixing", 4000, 8000, 12000));
stations.addService(new Service("GEAR", "Gear Fixing", 3000, 6000, 9000));
stations.addService(new Service("BRAKE", "Brake Fixing", 2000, 4000, 6000));

// Create a car
const car = new Car("Hatchback");

// Get the total price for a list of services
const services = ["BASIC", "ENGINE", "CLUTCH", "GEAR", "BRAKE"];
const totalPrice = stations.getTotalPrice(car, services);
console.log(`Total price for car of type ${car.type}: ${totalPrice}`);



// method 3
//creating a class for car service station
class CarServiceStation {
    constructor(carType, serviceCode) {
        this.carType = carType;
        this.serviceCode = serviceCode;
    }
    //creating a method to generate bill
    generateBill() {
        let bill = 0;
        let serviceCode = this.serviceCode;
        let carType = this.carType;
        let serviceCodeArray = serviceCode.split(",");
        for (let i = 0; i < serviceCodeArray.length; i++) {
            if (serviceCodeArray[i] == "BS01") {
                if (carType == "Hatchback") {
                    bill += 2000;
                } else if (carType == "Sedan") {
                    bill += 4000;
                } else if (carType == "SUV") {
                    bill += 5000;
                }
            } else if (serviceCodeArray[i] == "EF01") {
                if (carType == "Hatchback") {
                    bill += 5000;
                } else if (carType == "Sedan") {
                    bill += 8000;
                } else if (carType == "SUV") {
                    bill += 10000;
                }
            } else if (serviceCodeArray[i] == "CF01") {
                if (carType == "Hatchback") {
                    bill += 2000;
                } else if (carType == "Sedan") {
                    bill += 4000;
                } else if (carType == "SUV") {
                    bill += 6000;
                }
            } else if (serviceCodeArray[i] == "BF01") {
                if (carType == "Hatchback") {
                    bill += 1000;
                } else if (carType == "Sedan") {
                    bill += 1500;
                } else if (carType == "SUV") {
                    bill += 2500;
                }
            } else if (serviceCodeArray[i] == "GF01") {
                if (carType == "Hatchback") {
                    bill += 3000;
                } else if (carType == "Sedan") {
                    bill += 6000;
                } else if (carType == "SUV") {
                    bill += 8000;
                }
            }
        }
        if (bill > 10000) {
            return `Total Bill: ${bill} + Complimentary Cleaning`;
        } else {
            return `Total Bill: ${bill}`;
        }
    }
}

//creating an object for car service station
let carServiceStation = new CarServiceStation("Hatchback", "BS01,EF01");

//calling the method to generate bill
console.log(carServiceStation.generateBill());