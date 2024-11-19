import React from 'react'
import { Entries } from './Entries'
// import { JournalEntries } from './journalEntries'
// import { JournalScreen } from './JournalScreen'


export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar '>
            <h3 className='mt-1' >
                <i className='far fa-moon'></i>
                <span> hello</span>
            </h3>
            <button className='btn mt-1'>
                logout
            </button>
            
        </div>
        <div className='journal__new-entry'>
                    <i className='far fa-calendar-plus fa-5x'></i>
                   <p className=' mt-1'>New Entry</p> 
        </div>
        <Entries/>
    </aside>
  )
}
 