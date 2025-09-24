import React from "react";
import useAuth from "../Hooks/useAuth";

const AddJobs = () => {
  const {user} = useAuth();

  const handleAddAJob = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // salary range 
    const {min, max, currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency};

    // requirements
    const requirementsString = newJob.requirements;
    const oldRequirements = requirementsString.split(',');
    const newRequirements = oldRequirements.map(req => req.trim());
    newJob.requirements = newRequirements;

    // responsibilities
    const resString = newJob.responsibilities;
    const oldRes = resString.split(',');
    const newRes = oldRes.map(res => res.trim());
    newJob.responsibilities = newRes;

    console.log(newJob)
  }
  return (
    <div>
      <h2 className="text-4xl text-center mt-5 mb-5"> Add A Job</h2>
      <form onSubmit={handleAddAJob}>
        {/* Basic Info */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            name="title"
            className="input input-bordered w-full"
            required
          />

          <label className="label">Company</label>
          <input
            name="company"
            className="input input-bordered w-full"
            required
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input input-bordered w-full"
            placeholder="https://..."
          />

          <label className="label">Location</label>
          <input
            name="location"
            className="input input-bordered w-full"
            required
          />
        </fieldset>

        {/* Job Type & Category */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">Job Info</legend>

          <label className="label">Job Type</label>
          <select
            name="jobType"
            className="select select-bordered w-full"
            required
          >
            <option>On-Site</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>

          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option>Engineering</option>
            <option>Management</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Content Writing</option>
          </select>
        </fieldset>

        {/* Salary */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">Salary Range</legend>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              name="min"
              className="input input-bordered"
              placeholder="Min"
              required
            />
            <input
              type="number"
              name="max"
              className="input input-bordered"
              placeholder="Max"
              required
            />
            <select name="currency" className="select select-bordered">
              <option value="usd">USD</option>
              <option value="bdt">BDT</option>
              <option value="eur">EUR</option>
            </select>
          </div>
        </fieldset>

        {/* Job Details */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">Job Details</legend>

          <label className="label">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>

          <label className="label">Requirements (comma separated)</label>
          <textarea
            name="requirements"
            className="textarea textarea-bordered w-full"
            placeholder="JIRA, Trello, Slack"
            required
          ></textarea>

          <label className="label">Responsibilities (comma separated)</label>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered w-full"
            placeholder="Manage projects, Lead teams..."
            required
          ></textarea>
        </fieldset>

        {/* HR Contact */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">HR Contact</legend>

          <label className="label">HR Name</label>
          <input
            name="hr_name"
            className="input input-bordered w-full"
            required
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input input-bordered w-full"
            defaultValue={user.email}
          />
        </fieldset>

        {/* Status & Deadline */}
        <fieldset className="fieldset border p-4 rounded-lg">
          <legend className="font-semibold">Other Info</legend>

          <label className="label">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
          />
        </fieldset>

        <input type="submit" className="btn mt-3 mb-4 p" value="Add Job"></input>
      </form>
    </div>
  );
};

export default AddJobs;

{
  /*    <label className="label">Status</label>
          <select name="status" className="select select-bordered w-full">
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select> */
}
