import { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const TagFormCandidate = ({setWork}) => {
  const [tags, setTags] = useState([]);
  setWork(tags)
  const handleChange = (tags) => {
    setTags(tags);
    setSkills(tags);
  };
  return (
    <div className="mt-6 w-full h-fit">
      <h1 className="mb-3">Work with</h1>
      <TagsInput
        className={`border-none rounded p-1 w-full bg-slate-300 text-gray-950`}
        value={tags}
        onChange={handleChange}
      />
    </div>
  );
};

export default TagFormCandidate;
