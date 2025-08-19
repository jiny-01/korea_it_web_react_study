/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

/**
 *
 * React Router Dom
 * 리액트 => Single Page Application (SPA)
 * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
 * 페이지의 주소나 링크를 클릭했을 때 페이지 전체를 새로고침하지 않고
 * 주소에 맞는 특정 컴포넌트만 보여주어 마치 여러 페이지가 있는 것처럼 동작
 * 컴포넌트를 갈아끼우는 방식으로 가능하게끔 해줌 (페이지 전체를 새로고침하는 게 아님)
 *
 * footer, header 는 안바뀜
 */
function Router1() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  //useNavigate : 페이지를 이동시키는 함수를 제공하는 Hook
  //버튼 클릭처럼 특정 로직이 실행된 후에 페이지를 이동시키고 싶을 때 사용



  const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;

  const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: skyblue;
  `;

  const main = (color) => css`
    width: 100%;
    height: 800px;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  `;

  const footer = css`
    width: 100%;
    height: 100px;
    background-color: green;
  `;

  const countBox = css`
    display: flex;
  `;

  return (
    <div css={layout}>
      <header css={header}>
        {/* a 태그 클릭 시 브라우저가 페이지 전체를 새로고침 */}
        {/* SPA 의 장점의 의미가 없어지고 상태도 초기화됨 */}
        <a href={"/color/red"}>RED</a>
        <a href={"/color/blue"}>BLUE</a>
        <a href={"/color/orange"}>ORANGE</a>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* Link 컴포넌트는 페이지를 새로고침하지 않고 화면의 내용만 부드럽게 교체 */}
        {/* 링크를 사용하면 상태 초기화되지 않고 바꿔끼워짐 */}
        <Link to={"/color/red"}>RED(Link)</Link>
        <Link to={"/color/blue"}>BLUE(Link)</Link>
        <Link to={"/color/orange"}>ORANGE(Link)</Link>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* 함수를 사용해야할 땐 useNavigate */}
        <button onClick={() => navigate("/color/red")}>RED</button>
        <button onClick={() => navigate("/color/blue")}>BLUE</button>
        <button onClick={() => navigate("/color/orange")}>ORANGE</button>
        <div css={countBox}>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      {/* <Routes> => 여러 <Route> 들을 감싸는 영역 */}
      {/* <Route> 는 특정 경로(path) 와 그 경로에서 보여줄 컴포넌트(element)를 이어주는 역할 */}
      {/* 브라우저의 주소창이 path 와 일치하는 Route 를 찾아 해당 컴포넌트를 화면에 띄워줌 */}
      {/* 단 Routes 안에 있는 여러 Route 중 path 가 일치하는 거 하나만 띄워줌 */}
      <Routes>
        {/* path: 라우터 주소값 element: 띄울 컴포넌트(페이지) */}
        <Route
          path="/"
          element={<main css={main("white")}>메인 홈화면</main>}
        />
        <Route
          path="/color/red"
          element={<main css={main("red")}>RED 화면</main>}
        />
        <Route
          path="/color/blue"
          element={<main css={main("blue")}>BLUE 화면</main>}
        />
        <Route
          path="/color/orange"
          element={<main css={main("orange")}>ORANGE 화면</main>}
        />
      </Routes>
      <footer css={footer}>푸터 영역</footer>
    </div>
  );
}

//Link: a태그처럼 보여줘야하는 링크 있을 떄
//useNavigate: 특정 로직 이후 페이지 이동이 필요할 때 -> 버튼을 눌렀을때, 목록으로 돌아갈때

export default Router1;
