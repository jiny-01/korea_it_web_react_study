import React, { useState } from "react";

function Calculator() {
  // 변경해주는 함수는 앞에 set___ 으로 통일
  // 이때, 변수 input 은 setInput 만 바꿀 수 있음
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    const clickedValue = e.target.value;
    // console.log(e.target.value);
    // setInput(input + clickedValue);

    //연산자 뒤에 0_ 오는 거 막기 위한 로직
    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") {
        return;
    }

    //= 눌렀을 땐 결과만 eval 로 보여주고 끝
    if (clickedValue === "=") {
      setResult(eval(input));
      return;
    }

    if (input === "0") {
      setInput(clickedValue);
    } else {
      setInput(input + clickedValue);
    }
  };
  return (
    <div>
      <h1>입력:{input}</h1>
      <h1>결과:{result}</h1>
      <div>
        <button onClick={onClickHandler} value={0}>
          0
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={1}>
          1
        </button>
        <button onClick={onClickHandler} value={2}>
          2
        </button>
        <button onClick={onClickHandler} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={4}>
          4
        </button>
        <button onClick={onClickHandler} value={5}>
          5
        </button>
        <button onClick={onClickHandler} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={7}>
          7
        </button>
        <button onClick={onClickHandler} value={8}>
          8
        </button>
        <button onClick={onClickHandler} value={9}>
          9
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={"+"}>
          +
        </button>
        <button onClick={onClickHandler} value={"-"}>
          -
        </button>
        <button onClick={onClickHandler} value={"="}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
