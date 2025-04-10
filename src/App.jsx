// importazione file
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import mangaList from './data/data'

function App() {
  return (
    <>
      <Header />
      <Main mangaList={mangaList} />
    </>
  )
}

export default App
