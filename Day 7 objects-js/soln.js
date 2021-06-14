// question 1

// for(let items in student){
//   console.log (items);
// }

//keys,values,freezegetOwnPropertyName

function display(student) {
  let arr = Object.keys(student);
  return arr.join(",");
}

console.log(display({ name: "David Rayy", sclass: "VI", rollno: 12 }));

// question 2

function del(student) {
  console.log(student);
  delete student.rollno;
  return student;
}

console.log(del({ name: "David Rayy", sclass: "VI", rollno: 12 }));

// question 3

function len(student) {
  let size = Object.keys(student).length;
  return size;
}

console.log(len({ name: "David Rayy", sclass: "VI", rollno: 12 }));

// question 4

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function displayStatus() {
  library.forEach((value) => {
    if (value.readingStatus === true) {
      console.log("You have read " + value.title);
    } else {
      console.log("You haven't read " + value.title);
    }
  });
}
displayStatus();

/**
 * Expected output:
 * You have read The Road Ahead
 * You have read Walter Issacson
 * You haven't read Mockingjay: The Final Book of The Hunger Games
 */

// question 5

class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  // Getter
  get volume() {
    return this.calcVol();
  }
  // Method
  calcVol() {
    return this.height * this.radius * 2 * 3.1415;
  }
}

const cylinder = new Cylinder(10, 4);

console.log(cylinder.volume.toFixed(4));

// question 6

var library2 = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library2.sort(function (a, b) {
  return b.libraryID - a.libraryID;
});

console.log(library2);
