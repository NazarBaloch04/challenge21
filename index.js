"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["motorBike"] = 0] = "motorBike";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["cycle"] = 2] = "cycle";
})(VehicleType || (VehicleType = {}));
// What is an enum?
//  Enum means to show the status of object in array for example here the location of cycle is 2
console.log(VehicleType.cycle);
let student = {
    name: "Nazr Baloch",
    age: 18.2,
    courses: ["Applied Cloud and Geneerative Artificial Intelligence"]
};
console.log(student);
let circle = {
    kindOfShape: "circle",
    radiusOfCircle: 9
};
let rectangle = {
    kindOfShape: "rectangle",
    widthOfRectangle: 25,
    heightOfRectangle: 35
};
console.log(circle);
console.log(rectangle);
