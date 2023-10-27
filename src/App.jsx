import { useState } from 'react'
import './App.css'
import PostPage from './features/posts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostPage />
    </>
  )
}

export default App
