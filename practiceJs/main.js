function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

let list = [
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
];
for(let i =0; i < list.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.classList.add('name');
    a.setAttribute('href', 'javascript:;');
    a.setAttribute('onClick', `printRole(${list[i]})`);
    a.textContent = `${list[i].firstName} ${list[i].lastName}`;
    li.append(a);
    let div = document.createElement('div');
    div.classList.add('age')
    div.textContent = `${list[i].age}`;
    li.append(div);
    document.querySelector('#container').append(li);
}