import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function UserProfile() {
  //유저 정보 담을 상태
  const [user, setUser] = useState(null);

  //요청 보내서 받아오기 전까지는 로딩상태로 활성화
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);


  const fetchUser = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }

        //response.ok 가 ok 면 가져와서 set
        const responseData = await response.json();
        setUser(responseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);     //초기값이 true 이므로 로딩 풀어줘야함
      }
    };

  //유저 프로필 최초로 뜰 떄 요청 보내서 setUser
  useEffect(() => {
    fetchUser();
}, []);
  return (
    <div>
      <div>
        <p>이름: {}</p>
        <p>이메일: {}</p>
        <p>전화번호: {}</p>
      </div>
    </div>
  );
}

export default UserProfile;
