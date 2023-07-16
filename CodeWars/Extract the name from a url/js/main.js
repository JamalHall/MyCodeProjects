/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
 let x =url
let y = x.includes('http://www.')?x.replace('http://www.',''):x.includes('https://www.')?x.replace('https://www.',''):x.includes('http://')?x.replace('http://',''):x.includes('https://')?x.replace('https://',''):x.replace('www.','')
return y.split('.').slice(0,1).join()
}
console.log(domainName("http://github.com/carbonfive/raygun"),'github')
console.log(domainName("http://www.zombie-bites.com"),'zombie-bites')
console.log(domainName("https://www.cnet.com"),'cnet')
console.log(domainName("http://google.co.jp"), 'google')
console.log(domainName("www.xakep.ru"), "xakep")

// // codewars solution

// function domainName(url){
//   return  url.replace('http://', '')
//              .replace('https://', '')
//              .replace('www.', '')
//              .split('.')[0];
// }

// // another solution
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };


// // the one i like the most
// const removeStrStart = possibleStarts => str => {
//   const startUsed = possibleStarts.find(s => str.startsWith(s))
//   return startUsed !== undefined
//     ? str.substr(startUsed.length)
//     : str
// }

// const PROTOCOLS = ['http://', 'https://']
// const removeProtocol = removeStrStart(PROTOCOLS)

// /* 
//  * That's not the right thing to do in production 
//  * because any subdomain name is valid and there 
//  * can be many nested subdomains.
//  * More on that: https://serverfault.com/a/278296
//  */
// const SUBDOMAINS = ['www.'] 
// const removeSubdomain = removeStrStart(SUBDOMAINS)

// const domainName = url => 
//   removeSubdomain(removeProtocol(url)).split('.')[0]