import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const gitHub = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      gitHub,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Application Successful",
                showConfirmButton: false,
                timer: 1500
            })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl">Apply Now!!!</h3>
      <form onSubmit={handleForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">Github</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Profile Link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Your Resume Link"
          />

          <input type="submit" value="Apply" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
