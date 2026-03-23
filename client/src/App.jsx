import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from '../component/navbar'
import Banner from '../component/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Banner />
    </>
  )
}

export default App
