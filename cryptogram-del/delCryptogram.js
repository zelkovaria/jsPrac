//연속되는 단어인지 확인
//문자 길이 제한
//소문자인지 확인

function delAlpha(cryptogram) {
  let stack = [];

  for (let str of cryptogram) {
    if (str === stack[stack.length - 1]) {
      stack.pop();

      continue;
    }
    stack.push(str);
  }
  return stack;
}

exports.delAlpha = delAlpha;
