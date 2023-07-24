import { Link } from "react-router-dom";

const ExperienceSingleJob = ({job}) => {
    const {positionName,jobLocation,companyName,image}=job
    return (
        <div className="card ml-16  md:ml-0 w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="It Company" className="rounded-xl w-40 h-40 img-fluid" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{positionName}</h2>
                        <h4>{jobLocation}</h4>
                        <h4>{companyName}</h4>

                        <div className="card-actions">

                            <Link to='/applyJob'><button className="btn bg-black hover:bg-slate-800 text-white">Apply</button></Link>
                        </div>
                    </div>
                </div>
    );
};

export default ExperienceSingleJob;