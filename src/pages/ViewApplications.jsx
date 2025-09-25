import React from "react";
import { useLoaderData } from "react-router-dom";
import ViewApplicationList from "./ViewApplicationList";


const ViewApplications = () => {
  const applications = useLoaderData();

  return (
    <div>
      <ViewApplicationList applications={applications} />
    </div>
  );
};

export default ViewApplications;
