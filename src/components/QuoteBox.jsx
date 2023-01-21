import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className='contenedor'>
      <div className='quoteBox' style={{color: color}}>
          <i className='bx bxs-quote-left quoteBox_icon'></i>
          <p className='quoteBox_quote'>{quote.quote}</p>
          <h3 className='quoteBox_author'>{quote.author}</h3>
          <QuoteButton color={color} newQuote = {newQuote}/>
      </div>
    </div>
  )
}

export default QuoteBox