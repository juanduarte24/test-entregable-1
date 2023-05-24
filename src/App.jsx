
import { useState } from 'react'
import './App.css'
import dbSpace from './db/quote.json'
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'

const bgImages = ['bg1','bg2','bg3','bg4']

function App() {
  const [quote, setQuote] = useState(getRandom(dbSpace)) // creamos un estad donde se mostrara la frase
  // le pasamos la funcion que habiamos creado y el valor inicial sera la base que tenemos almacenada
  //para que de ahi escoga la frase aleatoria
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangePhrase = () => {
    setQuote(getRandom(dbSpace))
    setBgImage(getRandom(bgImages))
  }
  console.log(quote);

  return (
    <main className={`app ${bgImage}`}>
      <section className='app-container'>
        <h1>Space Info</h1>
        <QuoteBox handleChangePhrase={handleChangePhrase} phrase={quote.phrase} />

        <footer>Fuente: {quote.author} </footer>
      </section>
    </main>
  )
}

export default App
