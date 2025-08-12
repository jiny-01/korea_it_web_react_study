import React, { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
//   const [fruit, setFruit] = useState(fruits);
  //상태의 초기값은 fruit 의 초기값, 즉 태초의 fruits 배열
  //최초 마운트 시 fruits 배열 전체를 보여줌

  const [filteredFruits, setFilteredFruits] = useState(fruits);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // searchInput 이 바뀔 때마다 실행
    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(searchInput.toLowerCase())
    );
    //필터링된 것을 set
    console.log("새로운 필터링된 배열: ", filteredFruits);
    setFilteredFruits(filteredFruits);
    console.log("마운트됨");

    //클린업 함수 - 언마운트
    return () => {
      console.log("언마운트됨");
    };
  }, [searchInput]); // searchInput이 변경될 때마다 실행

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value); // 입력값 상태만 변경
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>FruitsFilter</h2>
      <input
        type="text"
        placeholder="검색할 과일을 입력하세요"
        value={searchInput}
        onChange={inputChangeHandler}
      />
      <ul>
        {filteredFruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

//input 하나 만들고 ul 하나 만들고 input 에 과일이름을 검색해서 필터를 거친 뒤에 li 로 출력
//최초에는 전체 과일을 보여주고 내가 입력을 할 때마다 즉시 Filter 를 거쳐서 li 로 보여주기
//핸들러로 안되면 useEffect 사용해보기

//전체 다 가져와서 필터링 or 입력할 때마다 백엔드에서 요청보내서 가져온 데이터를 보여줌 