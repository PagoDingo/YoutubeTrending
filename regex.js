var match = /^(a|e|i|o|u).*\1$/
var text = 'aa'

const csQuote = 'Wearewhatwebelieveweare.';
const regex1 = /are/g;
const regex2 = /eat/;

console.log(csQuote.matchAll(regex1)); // ["are", index: 3, input: "We are what we believe we are.", groups: undefined]
