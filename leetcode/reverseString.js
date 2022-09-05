function FirstReverse(str) { 

    // code goes here  
    let temp = "";
    for(let i = str.length - 1; i >= 0 ; i--){
      temp += (str[i]);
    }
    str = temp;
    return str; 
  
  }
     
  console.log(FirstReverse("word"));
