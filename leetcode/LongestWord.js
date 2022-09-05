function LongestWord(sen) { 

    // code goes here  
  
    sen=sen.replace(/[^a-zA-Z ]/ig,'') //replaces strings that contain non-alphabetic characters
    let words = sen.split(" ")
    let longest = words[0];
    for(let i = 1; i < words.length; i++){
      if(words[i].length > longest.length){
        longest = words[i];
      }
    }
    sen = longest;
    return sen; 
  
  }
     
