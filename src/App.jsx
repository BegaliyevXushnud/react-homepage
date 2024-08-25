import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Hero from './component/hero'
import Post from './component/posts'
import Main from './component/card'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Header></Header>
    <Hero></Hero>
    <Post></Post>
    <Main></Main>
    <Footer></Footer>
   </div>

  )
}

export default App
