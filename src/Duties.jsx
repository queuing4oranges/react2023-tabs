import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Duties({ duties }) {


  return (
    <div>
        {duties.map((duty) =>(
            <div id={uuidv4()}>
                <li>{duty}</li>
            </div>
        ))}
    </div>
  )
}
