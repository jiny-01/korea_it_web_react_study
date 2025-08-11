import React, { useState } from "react";

function InputState4() {
  const inputValueEmpty = {
    productName: "",
    price: "",
    amount: "",
  };

  //상품을 배열에 담기 위한 상태
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState(inputValueEmpty);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickHandler = () => {
    // setProducts((prev) => {
    //     const newArray = prev;
    //     newArray.push(inputValue)
    //     return newArray;
    // })
    //but 이렇게 하면 안됨
    //push 는 원본 배열을 직접 수정하기 때문에 리액트의 불변성을 위배
    //즉, 리액트는 상태의 주소값이 바뀌어야 변화를 감지하는데
    //push 는 주소값을 바꾸지 않기 때문에
    //재랜더링이 일어나지 않거나 예기치 않은 버그가 발생할 수 있음

    setProducts((prev) => [...prev, inputValue]);
    //원본 배열이 아닌 이전배열(prev)에 새로운 입력값을 넣어서 새 배열을 만든 것을 setProducts 에 넣음
    setInputValue(inputValueEmpty); //초기화
  };
  return (
    <div>
      <div>
        <label htmlFor="productName">상품명</label>
        <input
          id="productName"
          type="text"
          name="productName"
          value={inputValue.productName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">가격</label>
        <input
          id="price"
          type="text"
          name="price"
          value={inputValue.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">수량</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={inputValue.amount}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button onClick={onClickHandler}>확인</button>
      </div>
      {/* 출력 */}
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
          {/* td에는 name, price, amount 값 들어감 */}
        </thead>
        <tbody>
          {/* products 배열을 순회하며 각 상품 객체를 tr태그로 변환하는 과정 -> map 이용 */}
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>)
            //리액트에서 목록을 랜더링할 때는 각 항목을 구분할 수 있는 고유한 key 를 반드시 제공해야한다.
            // key 는 리액트가 어떤 항목이 변경, 추가, 삭제 되었는지 효율적으로 파악하는데 사용된다.
            //실제 DB 에서의 id 를 사용하는 것이 좋지만 없다면 index 사용
            
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;
