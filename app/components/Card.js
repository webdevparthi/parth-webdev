import React from 'react'

export default function Card({ title, children }) {
  return (
    <div className='shadow_ p-md-5 p-sm-4 p-3 rounded-4 mt-5'>
      <p className='card-title mb-5'>{title}</p>
      {children}
    </div>
  )
}
