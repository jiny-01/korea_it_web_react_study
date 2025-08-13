import React, { useEffect, useState } from "react";

function SignupForm() {
  //입력값 상태
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  //에러 상태
  const [error, setError] = useState({});

  //버튼 상태
  const [isDisabled, setIsDisabled] = useState(true);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    //키-값 형태로 넣음
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //formValues 를 배열에 넣어둠 - formValues 상태가 변할 때마다 유효성 검사 실시
  useEffect(() => {
    //최초 렌더링 시 일단 비활성화 (isDisabled 를 true 로)
    setIsDisabled(true);
    const { email, password } = formValues;
    const newErrors = {
      email: "",
      password: "",
    };

    // 이메일 유효성 검사
    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      console.log(newErrors.email);
      newErrors.email = "이메일 형태에 맞게 입력해주세요";
    }

    // 비밀번호 유효성 검사
    if (formValues.password.length < 8 && formValues.password.length > 0) {
      console.log(newErrors.password);
      newErrors.password = "비밀번호는 8자 이상이어야 함";
    }

    //
    //에러메시지
    setError(newErrors);

    //에러 없으면 false
    // console.log(Object.keys(newErrors))
    if (
      Object.keys(newErrors).length === 0 &&
      formValues.email &&
      formValues.password
    ) {
      setIsDisabled(false);
    }
  }, [formValues]);

  //입력값이랑 에러 있는지
  // const isValue = email && password;
  // const isError = newErrors.email || newErrors.password;

  //버튼 비활성화
  //여기서 errors 키를 뽑아서 0이면 isdisabled 비활성화(false 로 만듦)

  const onClickSignup = (e) => {
    alert("가입이 되었습니다.");
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formValues.email}
            onChange={inputChangeHandler}
          />
          {/* {error.email ? <p>{error.email}</p> : <></>} */}
          {error.email && <p>{error.emali}</p>}
          {/* setError 를 했기 때문에 여기선 그냥 error 쓰면 됨 */}
        </div>
        <div>
          <input
            type="email"
            name="password"
            placeholder="비밀번호"
            value={formValues.password}
            onChange={inputChangeHandler}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <button type="submit" disabled={isDisabled} onClick={onClickSignup}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignupForm;

//회원가입(총 3개 state 필요)
//email, 비밀번호 state -> inputstate3 참고(2개 묶어 객체 형태로)
//가입하기 버튼 disable 유무 state
//에러메시지 state : 이메일 형태에 맞게 입력해주세요 / 비밀번호는 8자 이상이어야함
//useEffect
// input value 입력될 때마다 유효성 검사 (이메일: @, 비밀번호: 길이 8자 이상?)

//이메일 인풋에 입력이 될 떄 유효성 검사 실시
//골뱅이 포함 여부에 따라서 없으면 에러메시지로
// 이메일 형태에 맞게 입력해주세요
// 비밀번호 인풋에 입력이 될때 유효성 검사 실시
//8자리 이상인지 여부에 따라서 안되면 에러메시지로
//비밀번호는 8자 이상이어야함
//에러메시지 없으면 버튼 활성화 하나라도 있으면 비활
//버튼을 누르면 alert 가입이 되었습니다.
