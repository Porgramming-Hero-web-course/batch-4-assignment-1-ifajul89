// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type ShapeType = Circle | Rectangle;

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (shapeDetails: ShapeType): number => {
  if (shapeDetails?.shape === "circle") {
    return Math.PI * shapeDetails?.radius ** 2;
  } else if (shapeDetails?.shape === "rectangle") {
    return shapeDetails?.height * shapeDetails?.width;
  } else {
    return 0;
  }
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);

// Sample Output 2:
// 24;
