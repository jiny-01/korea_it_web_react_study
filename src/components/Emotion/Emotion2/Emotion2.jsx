
/** @jsxImportSource @emotion/react */  
import * as s from "./styles"

function Emotion2() {
  return (
    <div>
        <div css={s.box1}></div>
        <div css={s.box2("gray")}></div>
    </div>
  )
}

export default Emotion2

//js 로 만든 css 를  s. 형식으로 가져온다는 뜻
//그러려면 css 에도 다 export 적어줘야함
//컴포넌트(폴더) -> jsx 파일, styles.js 만들기
//css 쓰려면 컴포넌트 내 모든 파일에 
///** @jsxImportSource @emotion/react */  
// import * as s from "./styles"

//css 에도 
//import { css } from "@emotion/react";
