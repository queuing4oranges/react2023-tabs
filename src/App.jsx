import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {

    const fetchJobs = async() => {
      try{
        setIsLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setJobs(result)
        console.log(jobs)
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
      {jobs &&
      jobs.map((singleJob, i) => (
        <div key={i}>
          <JobInfo singleJob={singleJob}/>
        </div>
      ))
      }


    </div>
    )
    
};
export default App;
