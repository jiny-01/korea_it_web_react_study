import React from "react";
import { Link, Route, Routes } from "react-router-dom";

/**
 *
 * 하위 라우트(서브 라우트)]
 * 특정 경로의 페이지 안에서 또 다른 내부 경로에 따라 다른 컴포넌트를 보여주는 것
 * 큰 카테고리 안에 소메뉴가 있는 것과 비슷
 */
function Page1() {
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Routes>
          <Route path="/page1" element={<h1>페이지 1입니다.</h1>}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>페이지 2입니다.</h1>
      </div>
    </>
  );
}

function Router2() {
  return (
    <div>
      <header>
        <Link to={"page/page1"}>page1</Link>
        <Link to={"page/page2"}>page2</Link>
        <Link to={"name/name1"}>name1</Link>
        <Link to={"name/name2"}>name2</Link>
      </header>
      <h1>Router2</h1>
      <Routes>
        {/* 경로 뒤에 /* 와일드카드 사용 */}
        {/* 이 경로로 시작하는 모든 하위 경로 의미 */}
        {/* 즉, /page/page1 또는 /page/page2 등에 해당하는 컴포넌트를 <Page1> 컴포넌트에서 보여준다. */}
        <Route path="/page/*" element={<Page1 />} />
        {/* Route 의 element 안에서 직접 중첩 <Routes> 를 정의하는 것도 가능 */}
        {/* 이 방식은 패키지 구조가 간단할 떄 */}
        <Route
          path="/name/*"
          element={
            <Routes>
              <Route path="/name1" element={<h1>이동윤</h1>} />
              <Route path="/name2" element={<h1>삼동윤</h1>} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default Router2;
