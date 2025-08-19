import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  const [todoList, setTodoList] = useState([]);

  //todoList 의 상태가 변할 때마다 로컬 스토리지에 저장
  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList")
    const todoListJson = JSON.stringify(todoList);
    if (localStorageTodoList !== todoListJson) {
      localStorage.setItem("todoList", todoListJson)
    }
  }, [todoList])

  return (
    <Layout>
      <Main todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
  //    메인은 레이아웃의 자식요소
  //    레이아웃에서 {children} 으로 main 을 가져옴
}

export default Index;
