
    function test(expected, literal){
       if(expected===literal) {
       return "Successful"+ " and the expected answer is: "+ expected
       }
       else{
        return "Not Successful"
       }
    }


//Return max of two

function getMax(a,b){
    if(a>b) return a;
    return b;
}

console.log(test(4,getMax(2,4)));


// Return max of three

function getMaxThree(a,b,c){
    if(a>b && a> c) return a;
    else if(b>a && b>c) return b;
    else return c;
}

console.log(test(8, getMaxThree(7,6,8)));

//Return true if it is vowel

function isVowel(l){
if(l.length==1 &&(l=='a' || l=='e' || l=='i'|| l=='o'|| l=='u')){
return true;
}
else 
return false;
}

console.log(test(true, isVowel("a")));

//sum and multiply 

function sum(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

function multiply(arr){
    var prod=1;
    for(var i=0; i<arr.length; i++){
        prod+= arr[i];
    }
    return prod;
}

var a= [1,2,3,4,5];
console.log(test(15, sum(a)))
a= [2,3]
console.log(test(6, multiply(a)))
//Reversing a word
function reverse(a){
 var x="";
 for(var i=a.length-1; i>=0; i--){
    x+= a[i];
 }
 return x;
}

console.log(test("c", reverse("c")));

//find the longest word from an array

function findLongestWord(words){
    var max=0;
    var word="";
    for(var i=0; i<words.length; i++){
        if(words[i].length>max){
            max= words[i].length;
            word= words[i];
        }
    }
    return word;
}

var array= ["Java", "JavaScript", "Phyton"];
console.log(test("JavaScript", findLongestWord(array)))

//Taking an array and i and returns the words greater that i

function findLongwords(arr, i){
    var newArr=[];
    for(var k=0;k<arr.length;k++){
      if(arr[k].length > i){
        newArr.push(arr[k])
      }
    }
    return newArr;
}

var z= ["Solomon","james", "Abraham", "Sara"]

console.log(test(["Solomon", "Abraham"], findLongwords(z,5)));

//modifying 
 var num=[1,2,3,4,5];
const number= num.map(function(elem, i, array){
     return  elem*10;
});

console.log(number)

var nums= [3,4,5,3,3,3,3,6];
const numbers= nums.filter(function(elem, i, array){
   return elem===3;
})

console.log(numbers)

//the product of all the elements

var value= [3,4,5,6]

const values= value.reduce(function(prevValue, elem, i, array){
   return prevValue*elem;
});

console.log(values)
