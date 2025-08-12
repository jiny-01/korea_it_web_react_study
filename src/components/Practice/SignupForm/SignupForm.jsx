import React, { useState } from 'react'

function SignupForm() {

    const [formValues, setFormValues] = useState({
        email: "", 
        password: "",
    })

    const [error, setError] = useState({})
    const [isDisabled, setIsDisabled] = useState(true)


  return (
    <div>
        <div>
            <input type="email" />
        </div>
        <div>
            <input type="password" />
        </div>
    </div>
  )
}

export default SignupForm




//회원가입(총 3개 state 필요)
//email, 비밀번호 state -> inputstate3 참고(2개 묶어 객체 형태로)
//가입하기 버튼 disable 유무 state
//에러메시지 state : 이메일 형태에 맞게 입력해주세요 / 비밀번호는 8자 이상이어야함
//useEffect
// input value 입력될 때마다 유효성 검사 (이메일: @, 비밀번호: 길이 8자 이상?)