import React, { useState } from 'react'

const index = () => {
  const [numCount, setNumCount] = useState(0)

  const plus = () => {
    setNumCount(numCount + 1)
  }
  const minus = () => {
    setNumCount(numCount - 1)
  }
  const reset = () => {
    setNumCount(0)
  }
  return (
    <div>
      <div className='container'>
        <div>Counter</div>
        <div>{numCount}</div>
        <div>
          <button type='button' onClick={plus} style={{ marginRight: '1rem' }}>
            PLUS
          </button>
          <button type='button' onClick={minus}>
            MINUS
          </button>
        </div>
        <div>
          <button type='button' onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

export default index
