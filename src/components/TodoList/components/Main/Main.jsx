/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as s from "./styles";
import { useState } from "react";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
  //2. Index 에 정의한 상태 가져오기

  const [inputValue, setInputValue] = useState("");
  //3. input 에 입력하는 내용을 inputvalue 에 상태가 저장될 것
  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  //4. enter 눌러졌을 때 inputValue 에 입력된 값을 추가하는 것
  const onKeyDownHandler = (e) => {
    //엔터키 눌러진 게 아니면 무시
    if (e.keyCode !== 13) {
      return;
    }
    //아무것도 입력안한 경우 무시
    if (inputValue.trim().length === 0) {
      return;
    }
    console.log(inputValue, "등록");

    //prev 로 일단 전에 상태 가져와서 setTodoList 로 상태 바꿔줌
    setTodoList((prev) => {
      //투두의 아이디 부여 - 이전 거 가져와서 마지막 요소(길이 - 1)의 아이디 가져옴
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      //추가할 투두 -> 새로운 객체로 만듦
      const newTodo = {
        id: lastId + 1,
        isComplete: false, //처음엔 미완료니까 false
        content: inputValue, //내용: 입력한 값
      };

      //이전 것 가져와서 거기에 newTodo 추가
      //상태가 바뀐다는 것 - 참조 주소가 바뀌는 것
      //따라서 새로운 배열로 넣어줘야 바뀜
      return [...prev, newTodo];
    });
    setInputValue("");
  };

  return (
    <div css={s.Container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" id={`todo${todo.id}`} />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>
                {todo.content}
              </label>
              
              <div css={s.hiddenTrashBox}>
                <div css={s.trashBox}>
                  <IoTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;

//1. Index.jsx 에서 todoList 상태 관리
//-> main 에서 props 로 setTodo 상태 가져옴
//3. input 에 입력하는 내용을 inputvalue 에 상태가 저장될 것
// -> inputOnChangeHandler
//4. enter 눌러졌을 때 inputValue 에 입력된 값을 추가하는 것
// -> onKeyDownHandler
//5. prev 로 일단 전에 상태 가져와서 setTodoList 로 상태 바꿔줌
//추가할 투두 -> 새로운 객체로 만듦 -> newTodo 객체
//-이때 투두에는 id, isComplete, content 들어있음
//이전 거 가져와서 newTodo 추가해서 return 해줌
//-> return [...prev, newTodo]
