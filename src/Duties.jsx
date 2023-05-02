import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Duties({ duties }) {


    
    return (
        <div>
        {duties.map((duty, index) =>{
            const id = uuidv4()
             
            return(
            <div className='duties-list' key={id}>
                <li className='duties-list-item'> {duty}</li>
            </div>
            )
        })}
    </div>
  )
}


