import React, { useEffect } from "react";

//===================자식컴포넌트============================
//컴포넌트의 생명주기를 보기 위함
function LifeCycle({ count }) {
  console.log("렌더링 됨");
  useEffect(() => {
    //컴포넌트 생성(눈에 보임)
    console.log("마운트 됨");

    //컴포넌트 소멸 => 언마운트
    return () => {
      console.log("언마운트 됨");
    };
  }, [count]);
  return (
    <div>
      <h4>자식 컴포넌트</h4>
      <p>부모가 준 숫자 : {count}</p>
    </div>
  );
}

//useEffect (함수, [])
//빈 배열일 땐 한번만 함수 실행 => 랜더링만 일어남
// 배열 안에 상태 변수가 있을 땐 상태가 바뀔 때마다 함수가 실행됨
// 랜더링 -> 언마운트 -> 마운트 (철거하고 다시 짓는 것)
export default LifeCycle;
