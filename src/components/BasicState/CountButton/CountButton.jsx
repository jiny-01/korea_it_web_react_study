import React from "react";

//CountState 의 버튼들만 따로 컴포넌트화시킨 것
//버튼 쓸 때는 컴포넌트화 시킨 이 폼을 가져감
//CountState 에서 이렇게 버튼 불러오면 됨
//<CountButton  value={1} onClick={onClickHandler} text={"+1"}/>
function CountButton({ value, onClick, text }) {
  return (
    <button value={value} onClick={onClick}>
      {text}
    </button>
  );
}

export default CountButton;
