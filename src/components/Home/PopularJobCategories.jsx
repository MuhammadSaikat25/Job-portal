import { useState } from "react";
import jobs from "./popularJob";

const PopularJobCategories = () => {
  const job=jobs
  return (
    <div className={`lg:mt-20 mb-10`}>
      <div className="text-center mb-4">
        <h1 className="font-semibold lg:text-4xl mb-4">
          Popular Job Categories
        </h1>
        <p className="text-slate-600">2023 jobs live - 293 added today.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl w-full mx-auto mt-14 ">
        {job.map((data, i) => (
          <div
            className="flex items-center p-5 rounded-md gap-3 border"
            key={i}
          >
            <img
              className={`w-[70px] h-[70px] object-cover bg-blue-300 p-1 rounded-md`}
              src={data.icon}
              alt=""
            />
            <div className="">
              <h1 className="lg:text-2xl font-semibold">{data.name}</h1>
              <h1 className="text-teal-700">{data.position}</h1>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default PopularJobCategories;
