const name = "Soham";
const count =50;
//console.log(name+count+"Value");
// String interpolation
//console.log(`Hello my ${name} and my count is ${count}`);
const gameName = new String('Soham')
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('m'));
const newstr = gameName.substring(0,4)// cannot take negative values, insteal will conside it 0
//console.log(newstr);
const astr=gameName.slice(-8,4);
//console.log(astr);

const str2 = "    soham  ";
//console.log(str2);
//console.log(str2.trim());
const url = "https://hitesh.com/hitesh%20choudhary";
//console.log(url.replace('%20','-'));
//console.log(url.includes('hitesh'));

console.log(url.split('/'));
