import React from "react";
import ViewApplicationRow from "./ViewApplicationRow";

const ViewApplicationList = ({ applications }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-blue-900 mb-5">
        Applications: {applications.length}
      </h3>

      {applications.length === 0 ? (
        <p className="text-gray-500">No applications yet for this job.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Applicant</th>
                <th>Links</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {applications.map((app, idx) => (
                <ViewApplicationRow
                  key={app._id || idx}
                  application={app}
                  index={idx}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewApplicationList;
