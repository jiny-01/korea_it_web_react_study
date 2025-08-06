/**
 * 자식요소 전달법
 * 1. props 속성 사용
 * 2. props 에 내장되어있는 children 속성 이용 */

function Props3({ ch1, children }) {
  // const ch1 = <div>자식요소1</div>
  console.log(children);
  console.log(ch1);
  return <div>{children}</div>;
}

export default Props3;
