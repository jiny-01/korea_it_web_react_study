import React, { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

//동적 파라미터
function Component1() {
  const { name } = useParams();
  /**
   * useParam 은 Route 의 path 에 설정된 동적 파라미터를 객체 형태로 가져온다
   * 객체 안의 name 을 비구조할당으로 바로 뽑아온 것
   */
  return <h1>path parameter 는 {name}입니다.</h1>;
}

function Component2() {
    //useSearchParams => 현재 search params, params 를 변경하는 함수 형태의 배열을 반환
    const [searchParams, setSearchParams] = useSearchParams();

    //searchParams : Iterator 반복 가능 -> for 쓴 것
    useEffect (() => {
        //이건 테스트용으로 확인하기 위함
        const entries = searchParams.entries();
        console.log(entries);   
        let searchParamObj = {}
        for (const [key, value] of entries) {
            searchParamObj[key] = value;
        }
        console.log(searchParamObj)

        //하나만 확인하고 싶다면
        //.get(키 이름) 으로 특정 키의 값 하나만 가져올 수 있다.
        const nameParam = searchParams.get("name");
        console.log("name => ", nameParam)

        //주소 여러개 썼을 때 다 가져오고 싶으면
        //원래는가장 마지막 것만 보여줌
        //.getAll(키 이름) 으로 같은 이름의 모든 값을 가져올 수 있다.
        console.log("address =>", searchParams.getAll("address"))
    }, [searchParams])

    //address 없으면 address=busan 추가
    //있는데 busan 아니면 busan 으로 값 바꿈
    const onClickHandler = () => {
        //prev.set(키, 밸류) 로 파라미터를 추가하거나 수정할 수 있다.
        //set 함수 호출 시 URL 이 바뀌고, 해당 컴포넌트가 재렌더링된다.
        setSearchParams((prev) => {
            prev.set("address", "busan");
            return prev;
        })
    }
  return (
    <>
      <div>
        <button onClick={onClickHandler}>URL 에 'address=busan' 추가/변경</button>
      </div>
    </>
  );
}

function Router4() {
  return (
    <div>
      <Routes>
        {/* path 에 : 을 사용하면 해당 위치의 URL 일부를 name 이라는 변수로 받겠다는 의미 */}
        <Route path="/param1/:name" element={<Component1 />} />
        <Route path="/param2" element={<Component2 />} />
      </Routes>
    </div>
  );
}

export default Router4;
