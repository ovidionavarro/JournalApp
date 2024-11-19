import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input type='text' placeholder='Some awesome title' className='notes__title-input' autoComplete='off'/>
            <textarea placeholder='Write your note here' className='notes__textarea'>

            </textarea>
            <div className='notes__image'>
                <img src='https://img.freepik.com/fotos-premium/imagen-cerebro-palabras-cerebro-el_888396-136.jpg?w=826'
                alt='imagen'/>
            </div>
        </div>
    </div>
  )
}
