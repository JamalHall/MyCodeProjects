/*
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)                
*/
//refactored
function numberOfPairs(gloves){
   let hash = {}
   let pairs = 0
   for(g of gloves){
      hash[g] = hash[g] +1 ||1
      }
      console.log(hash)
   for(p in hash){
      console.log(p,hash[p])      
      pairs = Math.floor(hash[p]/2)+pairs 
   }
   console.log(pairs)
return pairs
   }


console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]),'=> 2 (1 red pair + 1 blue pair)')
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]),'=> 3 (3 red pairs) ')

