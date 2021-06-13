// question 1

// function display(student) {
//   let arr = Object.keys(student);
//   return arr.join(",");
// }

// console.log(
//   display((student = { name: "David Rayy", sclass: "VI", rollno: 12 }))
// );

// question 2

// function del(student) {
//   console.log(student);
//   delete student.rollno;
//   return student;
// }

// console.log(del((student = { name: "David Rayy", sclass: "VI", rollno: 12 })));

// question 3

// function len(student) {
//   let size = Object.keys(student).length;
//   return size;
// }

// console.log(len((student = { name: "David Rayy", sclass: "VI", rollno: 12 })));

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

console.log(library.readingStatus);
