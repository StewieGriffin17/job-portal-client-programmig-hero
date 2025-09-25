import axios from "axios";
import React from "react";

const ViewApplicationRow = ({ application, index }) => {
  const { applicant, linkedIn, gitHub, resume } = application;

  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      {/* Serial number */}
      <th>{index + 1}</th>

      {/* Applicant */}
      <td>
        <div>
          <div className="font-bold">{applicant}</div>
          <div className="text-sm opacity-50">Applicant</div>
        </div>
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

      {/* Status Dropdown */}
      <td>
        <select
          className="select select-bordered select-sm"
          defaultValue={application.status}
          onChange={(e) => handleStatusChange(e, application._id)}
        >
          <option value="Pending">Pending</option>
          <option value="Interview">Interview</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
      </td>
    </tr>
  );
};

export default ViewApplicationRow;
