import React, { useEffect } from 'react'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function Router3() {

    //useLocation 은 현재 URL 의 다양한 정보를 담고 있는 location 객체를 반환

    const location = useLocation();

    const navigate = useNavigate();

    

    useEffect(() => {
        console.log("경로 이동함!")
        console.log(location.pathname);

        //location/2 라면 3 로 navigate(페이지 이동)
        //이떄 state 로 name, age 를 같이 넘겨줌
        //페이지 이동 간 데이터를 같이 넘겨줘야 할 때 활용
        if(location.pathname === "/location/2") {
            //이 state 는 URL 에는 보이지 않지만 이동한 페이지에서 location.state 로 값을 받을 수 있다.
            //로그인 후 이전 페이지로 돌려보내거나, 데이터를 숨겨서 전달할 때 유용

            //ex) 구매 창에서 로그인해야할 때 로그인 후 구매 창으로 바로 나오게 하려면 -> 데이터로 구매 페이지를 넘겨주면 됨

        navigate("/location/3", {
            state: {
                name : "김지니",
                age: 25,
            }

        })
    }
    }, [location.pathname])


    useEffect(() => {
        //location.state 는 navigate 함수를 통해 전달된 숨겨진 데이터를 담고 있다.
        console.log("location state => ",location.state)
    }, [location.state])

    useEffect(()=> {
        console.log("쿼리 파라미터 변경됨")
        console.log("location search =>", decodeURI(location.search))   //한글 깨지는 거 방지 decode
    }, [location.search])
  return (
    <div>
        <Link to={"/location/1"}>location1</Link>
        <Link to={"/location/2"}>location2</Link>
        <Link to={"/location/3"}>location3-1</Link>
        <Link to={"/location/3?name=이동윤"}>location3-2</Link>
        <Link to={"/location/3?name=삼동윤"}>location3-3</Link>
        <Routes>
            <Route path="/location/1" element={<h1>location1</h1>}/>
            <Route path="/location/2" element={<h1>location2</h1>}/>
            <Route path="/location/3" element={<h1>location3</h1>}/>
        </Routes>
    </div>
  )
}

export default Router3