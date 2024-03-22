// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum VehicleType {
    motorBike,
    Truck,
    cycle
}
// What is an enum?
//  Enum means to show the status of object in array for example here the location of cycle is 2

console.log(VehicleType.cycle);

// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.


interface Student {
    name: string;
    age: number;
    courses: string[];
}

let student: Student = {
    name: "Nazr Baloch",
    age: 18.2,
    courses: ["Applied Cloud and Geneerative Artificial Intelligence"]
};

console.log(student);


// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.



type Shape = {
    kindOfShape: "circle" | "rectangle";
    radiusOfCircle?: number; 
    widthOfRectangle?: number; 
    heightOfRectangle?: number; 
};


let circle: Shape = {
    kindOfShape: "circle",
    radiusOfCircle: 9
};


let rectangle: Shape = {
    kindOfShape: "rectangle",
    widthOfRectangle: 25,
    heightOfRectangle: 35
};

console.log(circle); 
console.log(rectangle); 