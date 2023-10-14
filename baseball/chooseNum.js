// 임의의 숫자 3개 입력
// 게임이 끝난 경우 재시작/종료 구분하는 1, 2
// 같은 숫자인지 비교
// 같은 자리에 위치했는지 비교
// 3스트라이크 출력 문구
function computerNum() {
  let numList = [];
  // const computer = [];
  for (let i = 0; i < 3; i++) {
    const computerNum = Math.floor(Math.random() * 9 + 1);
    numList.push(computerNum);
  }
  const computer = numList.join("");
  return computer;
}

function strike(num) {
  let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let strikeNum = 0;

  for (let i = 0; i < numList.length; i++) {
    if (num[i] === numList) {
      strikeNum++;

      continue;
    }
  }
  return strikeNum;
}

// console.log(strike());
console.log(computerNum());
