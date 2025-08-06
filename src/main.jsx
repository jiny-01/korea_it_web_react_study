import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // 오류 검출을 위한 strictMode  이므로 없애면 1번 찍힘
    <App />,
)
