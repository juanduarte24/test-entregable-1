import "./styles/QuoteBox.css"
import React from 'react'
//recibimos la prop desestructurando el objeto para solo
//uusar la propiedad phrase
const QuoteBox = ({ phrase, handleChangePhrase }) => {
    return (
        <section className='quoteBox'>


            <article className='quoteBox-phrase'>
                <p>{phrase}</p>

            </article>
            <button className='quoteBox-btn' onClick={handleChangePhrase}>Random Phrase</button>
        </section>
    )
}

export default QuoteBox