  let resultArr = [];
  let temp = [];
  let i = 0;
  let j = 0;

for(; i < arrTemp.length-1; i++) {
    for(j = i + 1; j < arrTemp.length; j++) {
        if(arrTemp[i].age > arrTemp[j].age) {
            temp.push(arrTemp[i]); // 큰 값을 잠시 임시변수에 저장
            arrTemp = sort[j]; // 작은 값을 앞으로 옮김
            sort[j] = temp; // 임시변수에 넣어둔 것을 뒤로 옮김
        }
    }

// 0번째와 그 이후로 비교후 정렬
// 1번째와 그 이후로 비교후 정렬...
console.log(sort);

function test5(arr) {
    let arrTemp = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i][0][0] === 'firstName' && arr[i][1][0] === 'lastName'){
          arrTemp.push(`${arr[i][0][1]} ${arr[i][1][1]}`); 
      }
      else if(arr[i][0][0] === 'firstName'){
        arrTemp.push(arr[i][0][1])
      }
      else if(arr[i][0][0] === 'lastName')
        arrTemp.push(arr[i][0][1])
    }
    return arrTemp;
  }
  // 오름차순 알고리즘
  // arrTemp.push(arr[i][1])