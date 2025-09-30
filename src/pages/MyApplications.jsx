import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import useAuth from "../Hooks/useAuth";

const myApplicationsPromise = (email, token) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(
    (res) => res.json()
  );
};

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={"Loading Application List"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
