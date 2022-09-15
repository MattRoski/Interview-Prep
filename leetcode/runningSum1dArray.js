var runningSum = function(nums) {
    
    let output = [];
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        output.push(nums[i] + total)
        total += nums[i]
    }
    return output
};

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]