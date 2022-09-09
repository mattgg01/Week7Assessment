const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}



// tinyArray 
// smallArray 
// mediumArray 
// largeArray 
// extraLargeArray 

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}
// tinyArray 
// smallArray 
// mediumArray 
// largeArray 
// extraLargeArray 

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsert = perf.stop();


//-----RESULTS------

//------tiny array-----
// insert 36.9 μs
// append 134.4 μs

//------small array-----
// insert 49.6 μs
// append 135.8 μs

//----medium array-----
// insert 198.7 μs
// append 197.3 μs

//---large array---
// insert 9.0736 ms
// append 640.5 μs

//----XLArray-------
//insert 894.1803 ms
//append 3.076 ms


//Summary of Results

//I'm noticing gradually as we increase the size of the array, the slower the functions become. They become much slower at large array extra large array. 
//Insert overall preformed better than append. Insert scales better. This is probably because with append, using the push() method, the code under the-
//hood is having to go all the way to the end of the array to insert the new numbers, and then returns the new array length. 
//With insert, the code inserts the numbers at the beginning of the array, allowing the computer to save time.

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
