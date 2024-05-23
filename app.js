"use strict";
// Q:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to each 
// magician’s name.
// Array of magician's names
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];
// Function to print the names of magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    // Create a copy of the original array
    let great_magicians = magicians.map(magician => "the Great " + magician);
    return great_magicians;
}
// Create a new array with "the Great" added to each magician's name
let great_magicians = make_great([...magicians]);
// Show the original list of magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
