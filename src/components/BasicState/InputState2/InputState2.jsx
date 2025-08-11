import React, { useState } from "react";

//하나의 state 로 관리
function InputState2() {
  //기본값도 객체 형태
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  //함수 공통, t1,t2,t3 각각 관리
  const onChangeHandler = (e) => {
    // console.log("name", e.target.name);
    // console.log("value", e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    //새로운 객체 형태로 만들기
    const newInputValue = {
      ...inputValue,
      [name]: value,    
      //[] 안쓰면 name 이 키가 되지만 해당 변수 안에 들어있는 문자열 값을 키로 사용할 수 있다.
    };

    setInputValue(newInputValue);
  };
  return (
    <div>
        <h1>{inputValue.t1}</h1>
        <h1>{inputValue.t2}</h1>
        <h1>{inputValue.t3}</h1>
      <input name="t1" type="text" onChange={onChangeHandler} />
      <input name="t2" type="text" onChange={onChangeHandler} />
      <input name="t3" type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default InputState2;
