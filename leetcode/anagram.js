//checks if two strings are anagrams
function validAnagram(str1,str2){
    //check str length, if length !==, return false
    if(str1.length !== str2.length){
        return false;
    }
    str1Obj = {}
    str2Obj = {}
    //builds str objects with characters of the input str as keys and value as the occurances of the characters
    for(let i of str1){
        str1Obj[i] = (str1Obj[i] || 0) + 1
    }
    for(let i of str2){
        str2Obj[i] = (str2Obj[i] || 0) + 1
    }

     for(let key in str1Obj){
        if(!(key  in str2Obj)){
            return false
        }
        if(str2Obj[key] !== str1Obj[key]){
            return false
        }
    }
    return true
    
}