// importazione file
import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import mangaList from './data/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main mangaList={mangaList} />
    </>
  )
}

export default App
