import React from 'react'

export const Entry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' 
        style={{
          backgroundSize:'cover',
          backgroundImage:'url(https://earthsky.org/upl/2021/09/Mars-and-Earth-comparison.jpeg)'
          }}>

        </div>
        <div className='journal__entry-body'>
          <p className='journal__entry-title '> 
            good day
          </p>
          <p className='journal__entry-content '> 
            lorem ipsumasasurnal__entry-conten urnal__entry-conten
          </p >
        </div>
        <div className='journal__entry-date-box'>
          <span>monday</span>
          <h4>24</h4>
        </div>
    </div>
  )
}
