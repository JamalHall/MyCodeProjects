//My Solution
/*PREP
Parameters 
    I am taking in the orginal String and I will not be given strings with less than two

Returns
    The orginal String with the First and Last letters Removed.

Examples
    Eloquent => loquen
    country => ountr


    Qs: Will I have two letter paremeters or paremeters with numbers or chacters other than numbers
Process
I could use either  substring  (1 and string .length -1)or split pop shift and join

*/

function removeFirstandLast(string) {
    let x = string.length
    console.log(`The length of ${string} is ${x}`)
    return string.substring(1,x-1)
}
console.log(removeFirstandLast("Eloquent")," check:=> loquen  ")
console.log(removeFirstandLast("country")," check:=> ountr  ")

