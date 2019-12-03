/* Beispiel
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
    
 
 let nums = [0,0,1,1,1,2,2,3,3,4];

const unique = new Set(nums);
const backtoArray = [...unique];

console.log(backtoArray.length);