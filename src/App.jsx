import { useState } from 'react'
import './App.css'
import PostPage from './features/posts/PostPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostPage />
    </>
  )
}

export default App
