// 1. First Problem: 

function mindGame(positive_number){
    /* This function take a positive integer. After taking the input, multiply this number by 3, then add 10 with this result, then divison by 2 with this result, then substract 5 with this result. */

    if(positive_number > 0){
        const firstResult = positive_number * 3;
        const secondResult = firstResult + 10;
        const thirdResult = secondResult / 2;
        const finalResult = thirdResult - 5;
        return finalResult;
    }
    else{
        return 'Please enter a positive number';
    }   
}
const number1 = 33;
const mindGameResult = mindGame(number1);
console.log(mindGameResult);


// 2. Second Problem:

function evenOdd(string){
    /* 
    This function take a string as input. Then it check how many charaters in that string. If the character length is even, then it return even. and if the character length is odd, then it return odd.
    */
      if(typeof string === 'string'){
        if(string.length % 2 === 0){
            return 'even';
           }
           else{
           return 'odd';
           }
      }
      else{
        return 'Please enter only string';
      }      
}

const string1 = 'Batch7';
const evenOddResult = evenOdd(string1);
console.log(evenOddResult);


// 3. Third Problem:

function isLGSeven(number){
    /* 
    This function take a number as input. Firstly, this input number substract by 7. If the result is less than 7, then return this result. and if the result is greater than or equal 7, the input number is multiply by 2 and return the result. 
    */
    if(typeof number === 'number'){
        const firstSubstractResult = number - 7;
        if ( firstSubstractResult < 7){
         return firstSubstractResult;
        }
        else{
         return number * 2;
        }
    }
    else{
        return 'Please enter only number';
    }  
}
const number2 = 15;
const isLGSevenResult = isLGSeven(number2);
console.log(isLGSevenResult);

// 4. Fourth Problem:

function findingBadData(array){
    /* 
    This function takes an number array as input. This array number can be positive or negative. If the any number is negative, it is called bad data. and the positive numbers called good Data. This function return how many bad data present in that array.
    */
    if(Array.isArray(array) === true ){
        let count = 0;
        for(i = 0; i < array.length; i++){
        const element = array[i];
        if(element < 0){
        count = count + 1;
        }
      }
     return count;
    }
    else{
        return 'Please enter an array';
    } 
}
const array1 = [ -4, -9, -5, -33, -55 ];
const findingBadDataResult = findingBadData(array1);
console.log(findingBadDataResult);


// 5. Fifth Problem:

function gemsToDiamond(input1, input2, input3){
    /* 
    This function take 3 inputs as parameter. With the first parameter, it multiplied by 21. With the second parameter, it multiplied by 32. and with the third parameter, it multiplied by 43. If the total is greater than
    */

    if(typeof input1 === 'number' && typeof input2 === 'number' && typeof input3 === 'number'){

        const firstFriendGem = input1 * 21;
        const secondFriendGem = input2 * 32;
        const thirdFriendGem = input3 * 43;

        const totalGem = firstFriendGem + secondFriendGem + thirdFriendGem;

        if( totalGem >= 1000*2){
          return totalGem - 2000;
        }
        else{
          return totalGem;
        }
    }
    else{
        return 'Please enter only number';
    }   
}

const gemsToDiamondResult = gemsToDiamond(100, 5, 1)
console.log(gemsToDiamondResult);