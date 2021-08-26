// Write Function
document.querySelector('#btn').addEventListener('click',translateWord)

function translateWord() {
  
     
    const input = document.getElementById("input")
    const word = input.value.toLowerCase()
    
    const firstLetter = word.substring(0,1)
    const secondLetter = word.substring(1,2)
    
    const isFirstLetterAVowel = checkIfVowel(firstLetter)
    const isSecondLetterAVowel = checkIfVowel(secondLetter)
    
    let output = ''

        if (isFirstLetterAVowel == false && isSecondLetterAVowel == true) {
      output = word.substring(1) + firstLetter + 'ay'
    }
        else if (isFirstLetterAVowel == false && isSecondLetterAVowel == false) {
      output = word.substring(2) + firstLetter + secondLetter + 'ay'
    }
        else if (isFirstLetterAVowel == true) {
      output = word + 'yay'
    }
    
    document.querySelector('#result').innerText = output
    console.log(output)
  }
//version 3 !!!THIS!!!!  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


  function checkIfVowel(letter) {
    console.log('aeiou'.includes(letter))
    return 'aeiou'.includes(letter)
}

// or this

// function checkIfVowel(letter) {
//   const vowelArray = ['a','e','i','o','u'] 
//        console.log(vowelArray.includes(letter))
//       return vowelArray.includes(letter)
//   }  



// //  version 2 not working 
//   function checkIfVowel(letter) {
//     const vowelArray = ['a','e','i','o','u']
//     vowelArray.forEach((e) => {
//       if (letter === e) {
//             console.log(true)
//             return true 
//     } else { 
//         console.log(false)
//         return false 
//     }         
//   })
// }
// // version 1 working
//   function  checkIfVowel(letter) {
//     if (letter == 'a' || letter == 'e' || letter =='i' || letter =='o' || letter == 'u') {
//         console.log(true)
//         return true
//     } else {
//         console.log(false)
//         return false
//   }
// }