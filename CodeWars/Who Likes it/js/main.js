/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
                    
*/
function likes(names) {
  let r
  let num = names.length
  switch(true){
    case (num>3):
      r= `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
      break;
    case (num===3):
      r= `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case (num===2):
      r= `${names[0]} and ${names[1]} like this`;
      break;
    case (num===1):
      r= `${names[0]} likes this`;
      break;
    default:
      r= 'no one likes this';
      break;
  }
  return r
} 

console.log(likes([]), 'no one likes this')
console.log(likes(['Peter']), 'Peter likes this')
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')

// code wars solution i like
function likes(names) {
  names.length === 0 && (names = ["no one"]);
  let [a, b, c, ...others] = names;
  switch (names.length) {
    case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${others.length + 1} others like this`;
  }
}
