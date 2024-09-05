import React from 'react'

const OkrGreenCard = ({head,body}) => {
  return (
    <div className='text-center okrGreenCard m-1'>
        <p className='m-0 card-head'>{head}</p>
        <p className='m-0 green-card-body'>{body}</p>
    </div>
  )
}

export default OkrGreenCard