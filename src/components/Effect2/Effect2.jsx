import React, { useEffect, useState } from "react";

function Effect2() {
  const [count, setCount] = useState(0);

  //useEffect 기본 (함수, 상태변수 배열)
  //useEffect: 컴포넌트가 마운트되거나 
  // 특정 상태가 변경될 때 코드 실행할 수 있게 해줌
  // useEffect(() => {}, [])
  useEffect(() => {
    {
      count === 0
        ? console.log("초기값 설정")
        : console.log("count 가 변경되면서 재렌더링");
    }
  }, [count]);

//useEffect(() => 함수, [count])
// count가 변경될 때마다 이 안의 함수가 실행됨
// count === 0일 때는 "초기값 설정"이라는 로그 출력
// 그 외에는 "count 가 변경되면서 재렌더링" 로그 출력
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
}

export default Effect2;
