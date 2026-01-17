// Rectangle Collision detection
var rect1 = {x: 5, y: 5, width: 50, height: 50};
var rect2 = {x: 20, y: 10, width: 10, height: 10};


if ( rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y

){
  // collision detected
} else {
  // no collision
};

/* if (rect2.x is to the left on the x-axis &&
      rect1 top angle is to the right of rect2 top angle &&
      rect1 left top angle is higher than rect2 left lower angle &&
      rect1 lower left angle is below the rect2 left top angle
){}*/

// Logic flip
// With one  check we know there is no collision

if ( rect1.x > rect2.x + rect2.width ||
  rect1.x + rect1.width < rect2.x ||
  rect1.y > rect2.y + rect2.height ||
  rect1.y + rect1.height < rect2.y

){
  // no collision
} else {
  // collision detected
};


// Circle Collision detection 

const circle1 ={ x: 10, y: 10, radius: 300};
const circle2 = { x: 500, y: 500, radius: 150 };

// calculate the sides of the right angle triangle by substracting their distance on x and y axis(adjacent(x-axis) and opposite(y-axis) sides)

let dx =  circle2.x - circle1.x;
let dy = circle2.y - circle1.y;


// calculate hypostenus using pythagoras theorem
let distance = Math.sqrt(dx * dx + dy * dy);
let sumOfRadii = circle1.radius + circle2.radius;

if (distance < sumOfRadii) {
  // circles collide
} else if(distance === sumOfRadii) {
  // circles are touching
} else if(distance > sumOfRadii){
  // no collision
}