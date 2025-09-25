import React from "react";
import { Link } from "react-router-dom";

const PostedJobRow = ({ job, index }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    jobType,
    category,
    applicationDeadline,
    status,
  } = job;

  return (
    <tr>
      {/* Serial number */}
      <th>{index + 1}</th>

      {/* Company Logo + Company Name */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{jobType}</div>
          </div>
        </div>
      </td>

      {/* Job title & category */}
      <td>
        {title}
        <br />
        <span className="badge badge-outline badge-sm">{category}</span>
      </td>

      {/* Deadline */}
      <td>{applicationDeadline}</td>

      {/* Status */}
      <td>
        <span
          className={`badge ${
            status === "active" ? "badge-success" : "badge-error"
          }`}
        >
          {status}
        </span>
      </td>

      {/* Actions */}
      <td>
        <div className="flex gap-2">
          <Link to={`/jobs/${_id}`} className="btn btn-xs btn-outline">
            Details
          </Link>
          <Link
            to={`/dashboard/edit-job/${_id}`}
            className="btn btn-xs btn-warning"
          >
            Edit
          </Link>
        </div>
      </td>

      {/* Applicant Show */}
      <td>
        <div className="flex gap-2">
          <Link to={`/applications/${_id}`} className="btn btn-xs btn-outline">
            View Applications
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default PostedJobRow;
