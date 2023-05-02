import React from 'react'
import Duties from './Duties'
// import BtnContainer from './BtnContainer'

export default function JobInfo({ jobs, currentItem}) {

    const { company, dates, title, duties } = jobs[currentItem]
 
  return (
   
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            <Duties duties={duties} />
        </article>
   
  )
}
