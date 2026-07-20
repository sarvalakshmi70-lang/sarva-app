import React from 'react'

function GrandWelcome() {
  function Message(){
        alter("Fresh cake made every day");
  }
  return (
    <section onMouseEnter={Message}>
    <h2 id="title1">Take a bite and let the deliciousness speak for itself</h2>
      <p>One bite is all it takes to experience the love, passion, and care baked into every cake. That's why our bakery stands out from the rest</p>
  </section>
  )

}

export default GrandWelcome;