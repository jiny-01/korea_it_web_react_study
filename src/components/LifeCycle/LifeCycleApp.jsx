import React, { useState } from "react";
import LifeCycle from "./LifeCycle";

// ================================부모컴포넌트 ========================================
// - count, show state 가짐
function LifeCycleApp() {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      {/* 보일지 안보일지 하는 상태 show */}
      {/* 자식 컴포넌트 보이게/안보이게 */}
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "컴포넌트 숨기기(언마운트)" : "컴포넌트 보이기(마운트)"} 
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        자식이 가지고 있는 카운트 업(재렌더링)
        </button>
        {show && <LifeCycle count={count} />}
    </div>
  );
}

//최초에 눈에 보일 땐 렌더링 먼저 -> 랜더링의 결과가 마운트(보여줄게)의 과정
//상태바뀔 땐 재렌더링만(마운트된 상태에서 내용만 바꿈 - 언마운트 X) 일어남
// 생겼다가(마운트), 
// 상태나 props가 바뀌면서 다시 그려지고(렌더링), 
// 필요 없으면 사라짐(언마운트)

export default LifeCycleApp;
