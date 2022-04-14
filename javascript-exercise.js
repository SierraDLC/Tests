
// Problem #1//
function reverse_number(num) {
    num = num.toString()

    return num.split("").reverse().join("")

}
console.log(reverse_number(349210))

// Problem #2//

function alphabetRev (abc) {

    return abc.split("").sort().join("") 
}
console.log(alphabetRev('webmaster'))

// Problem #3//

function upCase(str)
{
  let arr1 = str.split(' ');
  var newarr = [];
    
  for(var x = 0; x < arr1.length; x++){
      newarr.push(arr1[x].charAt(0).toUpperCase()+arr1[x].slice(1));
  }
  return newarr.join(' ');
}
console.log(upCase("the quick brown fox"));

// Problem 4//

function Prime(num) {
    
if (num===1) {
        return false;
      }
      else if(num=== 2)
      {
        return true;
      }else
      {
        for( x = 2; x < n; x++)
        {
          if(num % x === 0)
          {
            return false;
          }
        }
        return true;  
      }
}

// Problem 5//
function uniqueChar (firstStr) {
    
     let str = firstStr;
     let newString ="";
     for (i=0;i < str.length;i++)
     { 
        if(newString.indexOf(str.charAt(i))==-1) {
         
       newString += str[i];  
      
       }
      }
      
      return newString;  
}
    console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"))
    
    
    
    const imLoopy = () => true;

    function random(func) {
      func() }



    module.exports= {reverse_number, alphabetRev , imLoopy, random}; 

    

