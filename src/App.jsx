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
  const [isLoading, setIsLoading] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {

    const fetchJobs = async() => {
      try{
        setIsLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setJobs(result)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
      }
    }
    fetchJobs();
  }, [])

 
  return (
    <div>
      <h2>Full Stack Web Developer</h2>
      {isLoading &&
      <Loading />}

      <BtnContainer
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        jobs={jobs}
        />

      <JobInfo jobs={jobs}/>
  
    </div>
    )
    
};
export default App;
