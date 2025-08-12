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
      setIsLoading(false); //초기값이 true 이므로 로딩 풀어줘야함
    }
  };

  //유저 프로필 최초로 뜰 떄 요청 보내서 setUser
  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>불러오는 중...</div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <div>
      <div>
        {user ? (
          <div>
            <p>이름: {user.name}</p>
            <p>이메일: {user.email}</p>
            <p>전화번호: {user.phone}</p>
          </div>
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

//fetchUser 로직에 finally로 isloading 을 false 로 바꾸기 때문에 
//불러오는 중... -> 있으면 user 정보, 없으면 데이터 없음

//만약 에러 -> 유저 있는지 확인 -> 있으면 user 정보, 없으면 데이터 없음
export default UserProfile;


