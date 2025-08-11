import React, { useState } from "react";

function Render() {
    console.log("Render 컴포넌트가 렌더링되었습니다.")
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };

  //렌더링 => 해당 컴포넌트의 내용물이 새로운 값으로 교체되는 것 의미
  //ex) 컴포넌트: 건물, 렌더링: 건물 내부 인테리어 바꾸는 것
  return (
    <div>
      <h1>현재 숫자: {count}</h1>
      <button onClick={onClickHandler}>숫자 증가</button>
    </div>
  );
}

export default Render;
