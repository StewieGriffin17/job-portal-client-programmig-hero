import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  MapPin,
  DollarSign,
  User,
  Mail,
} from "lucide-react";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_name,
    hr_email,
    category,
  } = job;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          {company_logo && (
            <img
              src={company_logo}
              alt={company}
              className="w-14 h-14 rounded-md"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Briefcase size={16} /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {location}
          </span>
        </div>
      </div>

      {/* Employment Info */}
      <div className="bg-white shadow rounded-lg p-5 border">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Employment Info
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-2">
            <DollarSign size={18} className="text-blue-500" />
            <span>
              Salary: {salaryRange?.min} – {salaryRange?.max}{" "}
              {salaryRange?.currency?.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-500" />
            <span>Deadline: {applicationDeadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-blue-500" />
            <span>Category: {category}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={18} className="text-blue-500" />
            <span>HR: {hr_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-500" />
            <span>{hr_email}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Requirements */}
      {requirements?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsibilities */}
      {responsibilities?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      )}

      <Link to={`/jobapply/${_id}`}><button className="btn btn-sm btn-primary mt-5">Apply Now</button></Link>
    </div>
  );
};

export default JobDetails;
