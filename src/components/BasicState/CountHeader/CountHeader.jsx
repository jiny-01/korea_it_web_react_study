import React from 'react'

//h1 태그 (count) 를 컴포넌트화 시킨 것
function CountHeader({count}) {
    console.log("countHeader 렌더링")
  return (
    <h1>{count}</h1>
  )
}

export default CountHeader