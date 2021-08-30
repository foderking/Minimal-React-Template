import React from 'react'
import DummyParagraph from './Filler/DummyParagraph'

const App = () =>
{
  return (
    <div className='container my-4'>
      <div className='row p-4 pb-0 minnn text-center pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg'>
        <div className='p-3 p-lg-5 pt-lg-3'>
          <h1 className='display-5 fw-bold'>Minimal React Template</h1>

          <div className='mx-auto col-lg-8'>
            <div className='lead '>
              <DummyParagraph length={1} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
