import React from 'react'

export const NotesAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span>23 sep 3003</span>
        <div>
            <button className='btn'>Save</button>
            <button className='btn'>Delete</button>
        </div>
    </div>
  )
}
