const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

firstOperend.textContent = '0';
secondOperend.textContent = '0';

function calculate(n1, operator, n2) {
  let result = 0;
  let num1 = Number(n1);
  let num2 = Number(n2);
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if(operator === '+'){
    result = n1 + n2;
  }else if(operator === '-'){
    result = n1 - n2;
  }else if(operator === '*'){
    result = n1 * n2;
  }else if(operator === '/'){
    result = n1 / n2;
  }
  
  return String(result);
}


// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.

//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (action === 'number') {
//       // 그리고 버튼의 클레스가 number이면
//       // 아래 코드가 작동됩니다.
      

//       if(firstOperend.textContent === '0'){
//         firstOperend.textContent = buttonContent;
//       }else{
//         secondOperend.textContent = buttonContent;
//       }

//       console.log('숫자 ' + buttonContent + ' 버튼');
//     }

//     if (action === 'operator') {
//       operator.textContent = buttonContent;
//       console.log('연산자 ' + buttonContent + ' 버튼');
//     }

//     if (action === 'decimal') {
//      console.log('소수점 버튼');
//     }

//     if (action === 'clear') {
//       console.log('초기화 버튼');
//       firstOperend.textContent = '0';
//       secondOperend.textContent = '0';
//       operator.textContent = '+';
//       calculatedResult.textContent = '0';
//    }

//     if (action === 'calculate') {
//       console.log('계산 버튼');
//       calculatedResult.textContent = 
//       calculate(firstOperend.textContent,operator.textContent, secondOperend.textContent);
//     }
//   }
// });



// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousNum;
let previousKey = '0';
let firstnum_display_add = '';
let secondnum_display_add = '';
// firstnum_display_add에 값을 다 넣고 secondnum_display_add에 값을 넣기 위해서는 연산자가 입력된 후에 secondnum_display_add에 원하는 값을 다시 할당하도록 해야한다.

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      display.textContent = buttonContent;
      // 숫자를 지우지 않고, 계속 나타내기 위한 기능 구현
      // firstnum_display_add에 문자열 더하는 것처럼 차례대로 넣을 거임 ex) firstnum_display_add = firstnum_display_add + buttonConent;
      if(previousKey === '0'){
      firstnum_display_add = firstnum_display_add + buttonContent;
      display.textContent = firstnum_display_add;
      console.log(Number(firstnum_display_add));  // 나중에 넘버타입으로 계산하기 위해서 테스트해본 코드
      }else if(previousKey !== '0'){
        secondnum_display_add = secondnum_display_add + buttonContent;
        display.textContent = secondnum_display_add;
        console.log(Number(secondnum_display_add));  // 나중에 넘버타입으로 계산하기 위해서 테스트해본 코드
      }
    }
    if (action === 'operator') {
      display.textContent = buttonContent;
      previousKey = buttonContent;
    }
    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = 0;
      firstnum_display_add = '';
      secondnum_display_add = '';
      previousKey = '0';
    }
    if (action === 'calculate') {
      display.textContent = calculate(firstnum_display_add,previousKey,secondnum_display_add);
      console.log(display.textContent);
    }
  }
});