import { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";


const PostJobTag = () => {
  const [tags, setTags] = useState([]);
  const handleChange = (tags) => {
    setTags(tags);
  };
  return (
    <div className=" lg:w-[50%] h-fit">
      <h1 className="mb-3">Work with</h1>
      <TagsInput
        className={`border-none rounded  w-full bg-slate-300 text-gray-950`}
        value={tags}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostJobTag;
