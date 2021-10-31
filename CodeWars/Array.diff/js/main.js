/*
remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/
function arrayDiff(a, b) {
return a.filter(e => !b.includes(e))
}

// function arrayDiff(a, b) {
// a = a.join('')
// b = b.join('')
// return a.replaceAll(b,'').split('')
// }
 console.log(arrayDiff([1,2,2,2,3],[2]), "[1,3]")
 console.log(arrayDiff([], [4,5]), "[] ")
 console.log(arrayDiff([3,4], [3]), "[4]")
 console.log(arrayDiff([1,8,2], []), "[1,8,2]")
 console.log(arrayDiff([1,2,3], [1,2]), "[3]")
