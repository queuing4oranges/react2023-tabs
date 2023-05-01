import React, {useState} from 'react'
import Duties from './Duties'
// import BtnContainer from './BtnContainer'

export default function JobInfo({ jobs}) {

    const { company, dates, title, duties } = jobs[0]
 
  return (
    <div>
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            <Duties duties={duties} />
        </article>
    </div>
  )
}
