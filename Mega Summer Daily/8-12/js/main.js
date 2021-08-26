

//Final version
document.querySelector('#btn').addEventListener('click',countem)
let lArray = []

function countem() {
  lArray = []
  let word = document.getElementById("input").value.toLowerCase()
  let count = 0
  const vowles = 'aeiou'
    for(let letter of word){
      if(vowles.includes(letter)){
      lArray.push(letter )
      console.log(letter)
      count++
       }
    }
  console.log(count)
  return display(count)
}
    
function display (num) {  
  document.querySelector('#result').innerText = `The letters are ${lArray} and the number of vowels is ${num}`
}






// version 1 count not get working
  

  // document.querySelector('#btn').addEventListener('click',countem)

  // function countem() {  
       
  //   const input = document.getElementById("input").value.toLowerCase()
  //   const inputSplit = input.split('')
  //    console.log(input)
  //    console.log(inputSplit)
  //   let count = 0
  //       if('aeiou'.includes(inputSplit[count]) == true){
  //       console.log('aeiou'.includes(inputSplit[count]))
  //       console.log(inputSplit[count]) 
  //       count++
        
  //          }
  //     document.querySelector('#result').innerText = count
  
  //   }
  



// version 2 count not get working

  // document.querySelector('#btn').addEventListener('click',countem)

  // function countem() {  
       
  //     const input = document.getElementById("input")
  //     const word = input.value.toLowerCase()  
  //     const strArray = word    
  //     checkIfVowel(strArray)
    
  //     let count = ''
        
  //     if (vowelCount === true) {
  //       count = `The Total Vowels in ${word} is ${count}`
  //     } 
  
     
  //     document.querySelector('#result').innerText = count
  //     console.log(count)
  
  //   function checkIfVowel(wordArray) {
  //     let count = 0
  //     const vowels = 'aeiou'
  
  //     for(let i of wordArray) {
  //       if('aeiou'.includes(wordArray)){
  //         console.log('aeiou'.includes(wordArray))
  //         count++
  //       }
  //       console.log(i)
  //     }
  //     return count}
      
  //   }