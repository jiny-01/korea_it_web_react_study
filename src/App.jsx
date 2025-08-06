
import './App.css'
import BasicJsx from './components/BasicJsx/BasicJsx'
import BasicProps from './components/BasicProps/BasicProps'
import BasicReact from './components/BasicReact/BasicReact'
import CountState from './components/BasicState/CountState/CountState'

function App() {

  return (
    <>
    {/* <BasicReact /> */}
    {/* <BasicJsx /> */}
    {/* 이렇게 하면 BasicJsx.jsx 에 있는 jsx1 이 나올 것 */}
    {/* <BasicProps /> */}
    <CountState />
    </>
  )
}

export default App;
