import React from "react";

const JobFilterNav = () => {
  return (
    <div>
      <div className="bg-slate-400 p-3 w-fit h-fit">
        <div className="mb-4">
          <h1>Job type</h1>
          {/* ------------- JOB TYPE----------------- */}
          <div className="flex flex-col mb-3">
            <label>
              <input
                type="radio"
                name="full-time"
                value="full-time"
                checked={jobType === "full-time"}
                onChange={(e) => setJobType(e.target.value)}
              />
              Full Time
            </label>
            <label>
              <input
                type="radio"
                name="part-time"
                value="part-time"
                checked={jobType === "part-time"}
                onChange={(e) => setJobType(e.target.value)}
              />
              Part Time
            </label>
            <label>
              <input
                type="radio"
                name="Internship"
                value="Internship"
                checked={jobType === "Internship"}
                onChange={(e) => setJobType(e.target.value)}
              />
              Internship
            </label>
          </div>
          {/* -----------------Experience-------------- */}
          <h1>Experience</h1>
          <div className="flex flex-col mb-3">
            <label>
              <input
                type="radio"
                name="1-3"
                value="1-3"
                checked={experience === "1-3"}
                onChange={(e) => setExperience(e.target.value)}
              />
              1-3 Years
            </label>
            <label>
              <input
                type="radio"
                name="4-7"
                value="4-7"
                checked={experience === "4-7"}
                onChange={(e) => setExperience(e.target.value)}
              />
              4-7 Years
            </label>
            <label>
              <input
                type="radio"
                name="8-10"
                value="8-10"
                checked={experience === "8-10"}
                onChange={(e) => setExperience(e.target.value)}
              />
              8-10 Years
            </label>
            <label>
              <input
                type="radio"
                name="10+"
                value="10+"
                checked={experience === "10+"}
                onChange={(e) => setExperience(e.target.value)}
              />
              10+ Years
            </label>
          </div>
          {/* ------------------ Salary --------------- */}
          <h1>Salary</h1>
          <div className="flex flex-col">
            <label>
              <input
                type="radio"
                value="30-50"
                checked={salary === "30-50"}
                onChange={(e) => setSalary(e.target.value)}
              />
              30-50K
            </label>
            <label>
              <input
                type="radio"
                value="60-80"
                checked={salary === "60-80"}
                onChange={(e) => setSalary(e.target.value)}
              />
              60-80K
            </label>
            <label>
              <input
                type="radio"
                value="100-130"
                checked={salary === "100-130"}
                onChange={(e) => setSalary(e.target.value)}
              />
              100-130K
            </label>
            <label>
              <input
                type="radio"
                value="80-100"
                checked={salary === "80-100"}
                onChange={(e) => setSalary(e.target.value)}
              />
              80-100K
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilterNav;
