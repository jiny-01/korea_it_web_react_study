import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* 나머지 영역 다 차지 */
`;

export const listContainer = css`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  flex-grow: 1;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 424px;
    overflow-y: auto;
    /* 내가 설정한 높이(424px)보다 길어졌을 때 자동 스크롤 */

    & > li {
        padding: 5px 15px;
        border-bottom: 1px solid #dbdbdb;
        box-sizing: border-box;
        /* padding 과 border 있으니 box-sizing: border-box */
    }
  }
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  height: 40px;

  & > input {
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
  }
`;
