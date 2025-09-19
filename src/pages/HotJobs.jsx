import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then((data) => setJobs(data));
  }, [jobsPromise]);

  return <div>
    <h2 className="text-4xl">Hot Jobs of the Day</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {
            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
    </div>
  </div>;
};

export default HotJobs;
