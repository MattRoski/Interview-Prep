//Finds and returns the index of the largest number in an array

function largestNumIndex(nums){
    let output = nums[0];
    for(i in nums){
        if(nums[i] > output){
            output = i;
        }
        else{
            continue
        }
    }
    return output;
}

let numbers = [0,1,2,3,5,-2];