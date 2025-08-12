import React, { useEffect, useState } from "react";

function Effect1() {
  //h1 상태2개, input 상태2개
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [h1Name, setH1Name] = useState("");
  const [h1Age, setH1Age] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageOnChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const nameOnClickHandler = () => {
    setH1Name(name);
    //set 함수는 즉시 실행이 아니다 => 이벤트 핸들러 함수가 모두 끝나면 h1Name 의 값을
    // name 의 값으로 바꿔서 다시 컴포넌트를 렌더링해주세요라고 예약해두는 것
    console.log(h1Name);
    //리액트는 일괄 처리
    //상태 업데이트 요청이 들어오면 모아서 한번에 처리
    //만약 set 함수를 즉시 실행한다면 작은 변화에도 컴포넌트를 다시 렌더링하기 때문에 느려진다.
    //set 함수는 이 함수들이 끝난 다음 실행되기 때문에 출력한다고 바로 나오지 않음
    // ->  바로 쓰기 위해서 useEffect

    //useEffect(콜백함수,상태ㅐ 의존성 배열)
    //이때, 콜백함수 - 마운트 시 실행되는 함수
  };

  

  const ageOnClickHandler = () => {
    setH1Age(age);
    console.log(h1Age);
  }

  useEffect(() => {
  console.log("마운트됨");
  console.log(h1Name);
  console.log(h1Age);

  //클린업 함수 - 언마운트 시 실행되는 함수
  return () => {
    console.log("언마운트 됨");
  };
}, [h1Name, h1Age]);
  //둘 중 하나라도 상태가 바뀌면 다시 리셋될 것);
  
  return (
    <div>
      <h1>이름: {h1Name}</h1>
      <h1>나이: {h1Age}</h1>
      <input type="text" value={name} onChange={nameOnChangeHandler} />
      <button onClick={nameOnClickHandler}>이름확인</button>
      <input type="text" value={age} onChange={ageOnChangeHandler} />
      <button onClick={ageOnClickHandler}>나이확인</button>
    </div>
  );
}

export default Effect1;
