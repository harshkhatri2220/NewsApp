import React from 'react'
import loading from './loading.gif'

export default function Loading() {
  return (
    <div className='text-center'>
      <img style={{ width: 50, height: 50 }}src={loading} alt="loading" />
    </div>
  )
}
