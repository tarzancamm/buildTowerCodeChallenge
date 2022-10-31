// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// Ex)

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

const pyramid = (numFloors) => {
    // fill(value, start, end). Creates number of stars that are sent into function
    return Array(numFloors).fill('*')
    // For each element (*), create left side empty space
    .map((e, i) => ' '.repeat(numFloors - i - 1) 
    // Then input required stars, splits stars to be individual, then joins stars with space between them
    + e.repeat(i + 1).split('').join(' ') 
    // Then create right side empty space
    + ' '.repeat(numFloors - i - 1))

    // // Turn array into string and use \n to create new lines
    .join('\n');
}

console.log(pyramid(3));
// console.log(pyramid(4));
// console.log(pyramid(5));
