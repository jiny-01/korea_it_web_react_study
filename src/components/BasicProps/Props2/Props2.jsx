import React from 'react'

//매개변수 받을 때부터 비구조할당 바로 한 것
function Props2( {a, b, ...나머지} ) {
    console.log(나머지)
  return (
    <div>
        <p>{a}</p>
        <p>{b}</p>
    </div>
  )
}

export default Props2;