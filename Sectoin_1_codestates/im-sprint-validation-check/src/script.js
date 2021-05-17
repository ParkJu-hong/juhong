console.log("잘 불러왔니?");

let elInputUsername = document.querySelector('#username');

let failMsg = document.querySelector('.failure-message');
let successMsg = document.querySelector('.success-message');
let mismatchMessage = document.querySelector('.mismatch-message');

let elPassword = document.querySelector('#password');
let elPasswordRetype = document.querySelector('#password-retype');

let TrueOrFalse = Boolean;


elInputUsername.onkeyup = function (){
    console.log(elInputUsername.value);
    if(isMoreThan4Length(elInputUsername.value)) {
        // 성공 메세지가 보여야함.
        successMsg.classList.remove('hide');
        // 실패 메세지가 가려져야함.
        failMsg.classList.add('hide');  // display none 적용.
    }
    else {
        // 성공 메세지가 가려져야 함.

        // 실패 메세지가 보여야 함.
        successMsg.classList.add('hide');
        failMsg.classList.remove('hide'); // display block 적용.
    }
}

elPassword.onkeyup = function (){
  console.log(elPassword.value);
}

elPasswordRetype.onkeyup = function(){
  console.log(elPasswordRetype.value);
  // mismatchMessage.classList.remove('hide');
  TrueOrFalse = isMatch(elPassword.value,elPasswordRetype.value);
  console.log(TrueOrFalse);

  if(TrueOrFalse){
    mismatchMessage.classList.add('hide');
  }else{
    mismatchMessage.classList.remove('hide');
  }
}

// 1) 비밀번호 확인창 값과 비밀번호 값이 서로 일치하면 메시지가 더이상 보이지 않아야 합니다
// [비밀번호 확인] 입력창에서 값을 입력(keyup)하면
// [비밀번호] 값과 [비밀번호 확인] 값이 일치하는지 확인하고,
// 일치하지 않은 경우, 불일치 메시지를 화면에 표시합니다.




function isMoreThan4Length(value) {
    return value.length >= 4;
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  // password-retype, password <= id값
  if(password1 === password2){
      return true;
  }else{

    return false;
  }
}
