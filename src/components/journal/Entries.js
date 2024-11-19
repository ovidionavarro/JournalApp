import React from 'react'
import { Entry } from './Entry'


export const Entries = () => {
    const entries = [1,2,3]
  return (
    <div className='journal__entries'>
        {
            entries.map(value=>(
                <Entry key={value}/>
            ))
        }
    </div>
  )
}
