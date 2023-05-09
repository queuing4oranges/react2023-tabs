import React from 'react'

export default function BtnContainer({ jobs, setCurrentItem, currentItem }) {


  return (
    <div>
        {jobs.map((job, index) => (
            <button 
            onClick={()=>setCurrentItem(index)}
            className={index === currentItem ? "button btn-active" : "button btn-nonactive"}
            key={job.id}
            >{job.title}</button>
        ))}
    </div>
  )
}
