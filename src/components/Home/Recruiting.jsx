import img from "../../assets/job-searching.png";
const Recruiting = () => {
  return (
    <div className="max-w-7xl mx-auto w-full bg-slate-100 p-10 mt-14 rounded-md flex items-center gap-10 flex-col-reverse lg:flex-row lg:justify-between">
      <div className="text-center lg:text-left lg:w-[50%]">
        <h1 className="lg:text-3xl mb-3 font-semibold">Recruiting?</h1>
        <p className="text-slate-600">
          Advertise your jobs to millions of monthly users and search 15.8
          million CVs in our database.
        </p>
        <button className="mt-3 bg-blue-600 text-white rounded-md px-3 py-3">
          Start Recruiting Now
        </button>
      </div>
      <img className="w-[200px] lg:w-[350px]" src={img} alt="" />
    </div>
  );
};

export default Recruiting;
