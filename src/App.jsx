
import { useState } from 'react'
import './App.css'
import dbFortune from './db/phrases.json'
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'

const bgImages = ['bg1','bg2','bg3','bg4']

function App() {
  const [quote, setQuote] = useState(getRandom(dbFortune)) // creamos un estad donde se mostrara la frase
  // le pasamos la funcion que habiamos creado y el valor inicial sera la base que tenemos almacenada
  //para que de ahi escoga la frase aleatoria
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangePhrase = () => {
    setQuote(getRandom(dbFortune))
    setBgImage(getRandom(bgImages))
  }
  

  return (
    <main className={`app ${bgImage}`}>
      <section className='app-container'>
        <div className='container-title'>
        <h1 className='title'>Galletas de la Fortuna</h1>
        </div>
        <QuoteBox handleChangePhrase={handleChangePhrase} phrase={quote.phrase} />

        <footer>Fuente: {phrases.author} </footer>
      </section>
    </main>
  )
}

export default App
