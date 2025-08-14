import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";

function Index() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
//    메인은 레이아웃의 자식요소 
//    레이아웃에서 {children} 으로 main 을 가져옴

}

export default Index;
