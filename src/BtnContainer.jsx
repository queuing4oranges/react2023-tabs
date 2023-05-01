import React from 'react'

export default function BtnContainer({ jobs }) {
  return (
    <div>
        {jobs.map((job) => (
            <button>{job.title}</button>
        ))}
    
    
    </div>
  )
}
