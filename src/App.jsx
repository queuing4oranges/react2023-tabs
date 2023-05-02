import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import { v4 as uuidv4 } from 'uuid';
import BtnContainer from './BtnContainer';
// import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';
const id = uuidv4();

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    fetchJobs();
  }, [])
  
  const fetchJobs = async() => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result)
      setJobs(result)
      setIsLoading(false)
  }

  if(isLoading) {
    return (
      <section className='jobs-center'>
        <Loading />
      </section>
    )
  }
 
  return (
    <div className='tab-container'>
      <h4 >Open Positions</h4>

      <BtnContainer
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        jobs={jobs}
        />

      <JobInfo 
      jobs={jobs}
      currentItem={currentItem}
     />
  
    </div>
    )
    
};
export default App;
