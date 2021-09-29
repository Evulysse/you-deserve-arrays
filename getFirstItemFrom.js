const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Enter an array'));


const firstItem =array[0]

console.log('The first item is', firstItem);






