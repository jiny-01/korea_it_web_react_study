import React, { useEffect, useRef } from "react";

//useRef() 훅
//특정 요소에 직접 접근해야할 때 사용되는 리액트 훅
// React 컴포넌트에서 DOM 요소나 값에 직접 접근하고 싶을 때 사용

function DomRef() {
  //inputRef 가 useRef 에 접근할 수 있게 된 것
  const inputRef = useRef();
  //   console.log(inputRef.current);

  //useEffect(함수, 배열)
  //랜더링이 다 끝난 뒤 실행되므로 console 출력 가능
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    //최초 렌더링 시 여기에 포커스 두도록 함
  });
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default DomRef;
