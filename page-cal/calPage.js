//페이지 연달아 있는지 확인 -> return -1
//시작 면이나 마지막 면이 나오도록 -> [0,1], [401, ?] 안됨
//배열 이름은 pobi, crong 길이는 2

//페이지 자릿수 더하기와 곱하기 기능

function compare(pobi, crong) {
  const isValidPage = (page) => page >= 1 && page <= 400;

  if (
    !isValidPage(pobi[0]) ||
    !isValidPage(pobi[1]) ||
    !isValidPage(crong[0]) ||
    !isValidPage(crong[1]) ||
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1
  ) {
    return -1;
  }

  let pobiScore = maxScore(sum(pobi), multiply(pobi));
  let crongScore = maxScore(sum(crong), multiply(crong));

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

function sum(num) {
  let result = 0;
  while (num > 0) {
    const digit = num % 10;
    result += digit;
    num = Math.floor(num / 10);
  }
  return result;
}

function multiply(num) {
  let result = 1;
  while (num > 0) {
    const digit = num % 10;
    result *= digit;
    num = Math.floor(num / 10);
  }
  return result;
}

function maxScore(num1, num2) {
  let biggerNum = Math.max(num1, num2);
  return biggerNum;
}

exports.compare = compare;
