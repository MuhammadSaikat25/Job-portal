
import JobPostForm from "../components/Candidate/JobPostForm";

const PostANewJob = () => {
   
  return (
    <div className="lg:px-[250px] p-4">
      <h1 className="text-2xl font-semibold mb-2">Post a New Job!</h1>
      <h1>Ready to jump back in?</h1>
      <div className="">
        <JobPostForm></JobPostForm>
      </div>
    </div>
  );
};

export default PostANewJob;
