

/**
 * Emotion CSS
 * 라이브러리 설치 => 구글에 검색 emotion react -> npm 사이트
 * 서버 잠시 끄고 설치 Ctrl+C (끄기)
 * npm i @emotion/react (설치)
 * jsx 태그의 css 속성 활성화 => 주석으로 @jsxImportSource @react/emotion
 * css 객체 import => css `` 문자열로 작성   or css 쳐서 import
 * 즉, 
 *  import { css } from '@emotion/react'
    import React from 'react' 두 줄 있으면 쓸 수 있음
 */

/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
function Emotion() {
  const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
  `;

  const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};  
  `
  return (
    <div>
      <div css={box1}></div>
      <div css={box2("gray")}></div>
    </div>
  );
}

export default Emotion;
