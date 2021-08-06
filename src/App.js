import React from 'react'
import { Button } from 'react-bootstrap'

const App = () =>
{
  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <Button onClick={() => toggleShow(true)}>Show Toast</Button>
    </div>
  )
}

export default App
