const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Enter an array'));

let fourthOrLast = array[2]
if (array<4) {
  fourthOrLast = array[array.length-1];
}else {
  fourthOrLast = array[3];
}



console.log('The fourth (or last) item is', fourthOrLast);





// const cookies = [
//     'oatmeal',
//     'key-lime',
//     'peanut-butter',
//     'snickerdoodle',
//     'choc-chip'
//   ];
  
//   console.log(cookies.length);
  
//   const thirdItem = cookies[cookies.length - 3];
  
//   console.log(thirdItem);