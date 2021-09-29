const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Enter an array'));


const lastItem =array[array.length-1]

console.log('The last item is', lastItem);








