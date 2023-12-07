import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const TagsFormEmployer = ({ setSkills }) => {
  const [tags, setTags] = useState([]);

  const handleChange = (tags) => {
    setTags(tags);
    setSkills(tags);
  };
  return (
    <div className="mt-6 w-full h-fit">
      <h1 className="">Skills</h1>
      <TagsInput
        className={`border-none rounded p-1 w-full bg-slate-100 text-gray-950`}
        value={tags}
        onChange={handleChange}
      />
    </div>
  );
};

export default TagsFormEmployer;
