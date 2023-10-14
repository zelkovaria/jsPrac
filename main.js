// const compareScore = require("./page-cal/calPage");
const delAlpha = require("./cryptogram-del/delCryptogram");

// const pobi = [97, 98];
// const crong = [197, 198];

// const result = compareScore.compare(pobi, crong);

// console.log(result);

/* #################### */

const cryptogram = "zyelleyz";
const result2 = delAlpha.delAlpha(cryptogram);
console.log(result2.join(""));
