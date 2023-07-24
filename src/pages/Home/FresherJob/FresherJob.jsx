import { useEffect, useState } from "react";
import FresherSingleJob from "./FresherSingleJob";


const FresherJob = () => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/topFresherjobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const handleAllFresherJobs = ()=>{
        fetch('http://localhost:5000/allFresherJob')
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    return (
        <div>
            <h2 className="text-5xl text-center my-5">Freshers Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    jobs.map(job=><FresherSingleJob key={job._id} job={job}></FresherSingleJob>)
                }
            </div>

            <div className="text-center mt-5">
                <button className="btn bg-black hover:bg-slate-800 text-white" onClick={handleAllFresherJobs}>See All Jobs</button>
            </div>

        </div>
    );
};

export default FresherJob;