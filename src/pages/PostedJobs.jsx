import React, { Suspense } from "react";
import useAuth from "../Hooks/useAuth";
import PostedJobsList from "./PostedJobsList";

const postedJobPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
};

const PostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={"Loading Posted Jobs"}>
        <PostedJobsList
          postedJobPromise={postedJobPromise(user.email)}
        ></PostedJobsList>
      </Suspense>
    </div>
  );
};

export default PostedJobs;
