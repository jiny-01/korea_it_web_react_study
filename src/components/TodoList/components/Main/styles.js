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
  overflow: hidden;
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
      

      & > input[type="checkbox"] {
        display: none;

        & + label {
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
        }

        //체크 시 가상의 라벨
        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #0b4f8f;
        }
      }
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

export const hiddenTrashbox = css`
  right: 0;

  &:hover > div {
    right: 0;
    //trashbox 를 hover 되면 -46px 이던 것 0 으로 바꾸기
  }
`

export const trahBox = css`
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  right: -46px;
  //-46px 잡아놓고 hover 되면 right: 0으로 바꾸기 위함
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea0808;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
`;
