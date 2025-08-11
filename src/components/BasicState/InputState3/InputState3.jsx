import React, { useState } from "react";

function InputState3() {
  const inputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };

  const [inputValue, setInputValue] = useState(inputValueEmpty);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    //함수형 업데이트
    //set 에 새로운 값을 넣는 게 아니라 setInputValue((이전 상태의 값) => (새로운 값)) 형태
    //여기서 prev 는 이 함수를 실행하는 시점의 가장 최신 상태를 보장
    //따라서 항상 최신 상태를 기반으로 다음 상태를 업데이트하므로 안정적이다.

    //prev - set 하기 직전 즉, 이전 상태값
    setInputValue((prev) => {
        //...prev => 이전 상태 객체를 그대로 복사해서 불변성을 지킨다
        //[name]: value => 복사된 객체에서 현재 입력이 변경된 속성의 값만 새로 덮어쓴다.
        return {
            ...prev, 
            [name]: value,
        }
    })
  };
  return (
    <div>
      <h1>이름: {inputValue.name}</h1>
      <h1>나이: {inputValue.age}</h1>
      <h1>주소: {inputValue.address}</h1>
      <input name="name" type="text" value={inputValue.name} onChange={onChangeHandler} />
      <input name="age" type="text" value={inputValue.age} onChange={onChangeHandler} />
      <input name="address" type="text" value={inputValue.address} onChange={onChangeHandler} />
      <button onClick={() => setInputValue(inputValueEmpty)}>리셋</button>
    </div>
  );
}

export default InputState3;
