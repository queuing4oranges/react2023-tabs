import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Duties({ duties }) {

    const id = uuidv4()
    console.log(id)

  return (
    <div>
        {duties.map((duty) =>(
            <div id={id}>
                <li>{duty}</li>
            </div>
        ))}
    </div>
  )
}
