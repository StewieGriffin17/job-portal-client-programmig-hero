import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-4xl text-green-900 font-bold">
        Applied Job: {applications.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Information</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <ApplicationRow
                key={application._id}
                index={idx}
                application={application}
              ></ApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
