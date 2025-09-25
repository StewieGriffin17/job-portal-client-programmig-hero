import React from "react";

const ApplicationRow = ({ application, index }) => {
  const {
    applicant,
    company,
    title,
    company_logo,
    linkedIn,
    gitHub,
    resume,
    status,
  } = application;

  // Default to "Pending" if status is missing/empty
  const finalStatus =
    status && status.trim() !== "" ? status : "Pending";

  // Badge color mapping
  const statusColors = {
    Pending: "badge-warning", // yellow
    Interview: "badge-info", // blue
    Hired: "badge-success", // green
    Rejected: "badge-error", // red
  };

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
            <div className="text-sm opacity-50">{applicant}</div>
          </div>
        </div>
      </td>

      {/* Job title */}
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">Applied</span>
      </td>

      {/* Links */}
      <td>
        <div className="flex flex-col gap-1">
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className="link link-primary text-sm"
          >
            LinkedIn
          </a>
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className="link link-primary text-sm"
          >
            GitHub
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="link link-primary text-sm"
          >
            Resume
          </a>
        </div>
      </td>

      {/* Status */}
      <td>
        <br />
        <span className={`badge ${statusColors[finalStatus] || "badge-ghost"}`}>
          {finalStatus}
        </span>
      </td>
    </tr>
  );
};

export default ApplicationRow;
