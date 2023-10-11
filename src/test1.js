//페이지 연달아 있는지 확인 -> return -1
//시작 면이나 마지막 면이 나오도록 -> [0,1], [401, ?] 안됨
//배열 이름은 pobi, crong 길이는 2

//페이지 자릿수 더하기와 곱하기 기능

function problem1(pobi, crong) {
  const sum = (num) => {
    const stringNum = num.toString();
    let result = 0;
    for (let i = 0; i < stringNum.length; i++) {
      result += parseInt(stringNum[i]);
    }
    return result;
  };

  const multiply = (num) => {
    let result = 1;
    for (let i = 0; i < num.length; i++) {
      const digit = parseInt(num[i]);
      result *= digit;
    }
    return result;
  };
}
