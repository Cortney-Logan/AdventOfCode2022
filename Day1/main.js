const {readFileSync, promises:fsPromises} = require('fs');

function syncReadFile(filename){
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r\n/);

    return arr;
}

// find elf carrying the most calories
function findMaxCalories(){
const calorieArray = getCalorieArray();

// find max element
const max = Math.max(...calorieArray);

// finds index with the most calories and adds 1 to count elf
const elfWithMostCalories = calorieArray.indexOf(max)+1;

console.log("The elf with the most calories is elf number ", elfWithMostCalories, ". They have ", max, " calories.")
}

function findTopCalories(count){
const calorieArray = getCalorieArray();

// sort calorie array
const sortedCalories = sortCalories(calorieArray);

let topCalories = 0;
let i = 0;

while(i < count){
    topCalories += sortedCalories[i];
    i++;
}
console.log("The sum of the top ", count, " elves calories are ", topCalories);
}

function getCalorieArray(){
    // read lits of calories
    let caloriesArray = syncReadFile('./list.txt');

    let elves = [];

    let elfCalories = 0;

caloriesArray.forEach(calorie => {
    if(calorie === ''){
        elves.push(elfCalories);
        elfCalories = 0;
    } else {
        elfCalories += parseInt(calorie)
    }
});

// Adds final elf and calories to elf array
elves.push(elfCalories);

return elves;
}

function sortCalories(arr){
let sortedArray = arr;
let i = 1;

while(i < sortedArray.length){
    let j = i-1;
    while(j >= 0){
    if(sortedArray[j]<sortedArray[j+1]){
        const temp = sortedArray[j];
        sortedArray[j]=sortedArray[j+1]
        sortedArray[j+1]=temp
    }
    j -=1;
}
i++;
}

return sortedArray;

}

findMaxCalories();

findTopCalories(3);
