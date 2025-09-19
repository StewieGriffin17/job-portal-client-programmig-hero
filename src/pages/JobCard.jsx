import React from "react";
import { MapPin, Briefcase, Calendar } from "lucide-react"; // for icons
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    description,
    company,
    salaryRange,
    requirements,
    company_logo,
    _id
  } = job;

  return (
    <div className="card bg-base-100 w-[350px] border rounded-xl shadow-md hover:shadow-lg transition mb-5">
      {/* Company Info */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={company_logo}
          alt={company}
          className="w-10 h-10 rounded-lg object-contain"
        />
        <div>
          <h2 className="font-semibold">{company}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin size={14} /> {location}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <div className="px-4 pb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Briefcase size={14} /> {jobType}
        </p>
        <p className="text-sm text-gray-400 line-clamp-2 mt-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {requirements.map((req, idx) => (
            <span
              key={idx}
              className="badge badge-outline text-xs px-3 py-1"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Salary + Button */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        <p className="text-primary font-bold">
          {salaryRange?.currency === "bdt"
            ? `৳${salaryRange.min} - ৳${salaryRange.max}`
            : `$${salaryRange.min} - $${salaryRange.max}`}{" "}
          <span className="text-xs font-medium">/Month</span>
        </p>
        <Link to={`/jobs/${_id}`}><button className="btn btn-sm btn-primary">Show Details</button></Link>
      </div>
    </div>
  );
};

export default JobCard;
