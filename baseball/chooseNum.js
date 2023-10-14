// 임의의 숫자 3개 입력
// 게임이 끝난 경우 재시작/종료 구분하는 1, 2
// 같은 숫자인지 비교
// 같은 자리에 위치했는지 비교
// 3스트라이크 출력 문구

function numBall(user) {
  const strikeResult = strikeBall(user, computerNum());
  console.log(strikeResult + "볼");
}

function computerNum() {
  let numList = [];
  for (let i = 0; i < 3; i++) {
    const computerNum = Math.floor(Math.random() * 9 + 1);
    numList.push(computerNum);
  }
  const computer = numList.join("");
  return computer;
}

function strikeBall(num, computerNum) {
  const computerBall = computerNum;
  let strikeNum = 0;
  let ballNum = 0;

  for (let i = 0; i < num.length; i++) {
    if (computerBall[i] === num[i]) {
      ballNum += 1;

      continue;
    }
  }
  console.log(computerBall + "여기");
  return ballNum;
}

exports.numBall = numBall;
