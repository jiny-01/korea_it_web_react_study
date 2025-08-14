// import './App.css'
import BasicJsx from "./components/BasicJsx/BasicJsx";
import BasicProps from "./components/BasicProps/BasicProps";
import BasicReact from "./components/BasicReact/BasicReact";
import Calculator from "./components/BasicState/Calculator/Calculator";
import CountState from "./components/BasicState/CountState/CountState";
import InputState1 from "./components/BasicState/InputState1/InputState1";
import InputState2 from "./components/BasicState/InputState2/InputState2";
import InputState3 from "./components/BasicState/InputState3/InputState3";
import InputState4 from "./components/BasicState/InputState4/InputState4";
import DomRef from "./components/DomRef/DomRef";
import Effect1 from "./components/Effect/Effect1/Effect1";
import Effect2 from "./components/Effect2/Effect2";
import Emotion1 from "./components/Emotion/Emotion1/Emotion1";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import LifeCycleApp from "./components/LifeCycle/LifeCycleApp";
import Render from "./components/LifeCycle/Render";
import FruitsFilter from "./components/Practice/FruitsFilter/FruitsFilter";
import SignupForm from "./components/Practice/SignupForm/SignupForm";
import UserProfile from "./components/Practice/UserProfile/UserProfile";
import Index from "./components/TodoList/pages/Index";
import Header from "./components/TodoList/components/Header/Header";

function App() {
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BasicJsx /> */}
      {/* 이렇게 하면 BasicJsx.jsx 에 있는 jsx1 이 나올 것 */}
      {/* <BasicProps /> */}
      {/* <CountState /> */}
      {/* <Calculator /> */}
      {/* <InputState1 /> */}
      {/* <InputState2 /> */}
      {/* <InputState3 /> */}
      {/* <InputState4 /> */}
      {/* <DomRef /> */}
      {/* <Render /> */}
      {/* <LifeCycle /> */}
      {/* <LifeCycleApp /> */}
      {/* <Effect1 /> */}
      {/* <Effect2 /> */}
      {/* <FruitsFilter /> */}
      {/* <UserProfile /> */}
      {/* <SignupForm /> */}
      {/* <Emotion1 /> */}
      <Index />
    </>
  );
}

export default App;
