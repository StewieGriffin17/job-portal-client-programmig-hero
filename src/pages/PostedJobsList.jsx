import React, { use } from "react";
import PostedJobRow from "./PostedJobRow";

const PostedJobsList = ({ postedJobPromise }) => {
  const postedJobs = use(postedJobPromise);

  return (
    <div>
      <h3 className="text-4xl text-green-900 font-bold mt-5 mb-5">
        Posted Jobs: {postedJobs.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {postedJobs.map((job, idx) => (
              <PostedJobRow
                key={job._id}
                index={idx}
                job={job}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobsList;
