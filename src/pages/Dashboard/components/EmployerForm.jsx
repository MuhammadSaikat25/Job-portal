import { useEffect, useState } from "react";
import TagsFormEmployer from "./TagsFormEmployer";

const EmployerForm = () => {
  const [skill, setSkills] = useState([]);
  const [cols, setCols] = useState(getInitialCols());
  const [currentSalary, setCurrentSalary] = useState();
  const [expectedSalary, setExpectedSalary] = useState();
  const [experience, setExperience] = useState();
  const [age, setAge] = useState();
  const [country, setCountry] = useState('Bangladesh');
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [number, setNumber] = useState("");
  //! ------------------- All function and useEffect-----------------------
  function getInitialCols() {
    return window.innerWidth >= 1024 ? 150 : 50;
  }

  useEffect(() => {
    function handleResize() {
      setCols(getInitialCols());
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handelForm = (e) => {
    e.preventDefault();
    const myProfileData = {
      name,
      email,
      job,
      number,
      skill,
      currentSalary,
      expectedSalary,
      experience,
      age,
      country,
      description,
    };
    console.log(myProfileData);
  };
  return (
    <div>
      <form
        onSubmit={handelForm}
        className="bg-white p-4 rounded-md"
        enctype="multipart/form-data"
      >
        {/* ------------------------------ Image Input-------------------------- */}
        <div className="border-dashed border-gray-600 border-2 w-fit p-8 cursor-pointer rounded">
          <label className="cursor-pointer" htmlFor="Logo">
            Logo
          </label>
          <input className="hidden" id="Logo" type="file" accept="image/*" />
        </div>
        <p className="w-full h-[1px] bg-slate-600 mt-7"></p>
        <div className="w-full">
          <div className=" w-full flex-col lg:flex-row lg:flex justify-evenly p-3 gap-4">
            <section className="lg:w-[50%]">
              <label className="" htmlFor="Full Name ">
                Full Name
              </label>
              <br />
              <input
                className="p-2 rounded w-full bg-slate-100"
                type="text"
                name=""
                id="Full Name"
                placeholder="Alex"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section className="lg:w-[50%] mt-4 lg:mt-0">
              <label htmlFor="Job Title">Job Title</label>
              <br />
              <input
                className="p-2 rounded w-full bg-stone-100"
                type="text"
                name=""
                id="Job Title"
                placeholder="Web developer"
                required
                onChange={(e) => setJob(e.target.value)}
              />
            </section>
          </div>
          <div className=" w-full flex-col lg:flex-row lg:flex justify-evenly p-3 gap-4">
            <section className="lg:w-[50%]">
              <label htmlFor="Phone">Phone</label>
              <br />
              <input
                className="p-2 rounded w-full bg-slate-100"
                type="number"
                name=""
                id="Phone"
                placeholder="02777252133"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </section>
            <section className="lg:w-[50%] mt-4 lg:mt-0">
              <label htmlFor="Email">Email</label>
              <br />
              <input
                className="p-2 rounded w-full bg-stone-100"
                type="email"
                name=""
                id="Email"
                placeholder="example@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
          </div>
        </div>
        {/* ----------------------------- Salary------------------ */}
        <div className="w-full">
          <div className=" w-full flex-col lg:flex-row lg:flex justify-evenly p-3 gap-4 ">
            <section
              value={currentSalary}
              onChange={(e) => setCurrentSalary(e.target.value)}
              className="lg:w-[50%] mb-6 lg:mb-0"
            >
              <label htmlFor="Current Salary">Current Salary($)</label>
              <select
                className="p-2 rounded w-full bg-stone-100"
                name=""
                id="Current Salary"
              >
                <option value="30-50">30-50 k</option>
                <option value="50-70">50-70 k</option>
                <option value="80-100">80-100 k</option>
                <option value="110-150">110-150 k</option>
              </select>
            </section>
            <section className="lg:w-[50%]">
              <label htmlFor="Expected Salary">Expected Salary($)</label>
              <select
                className="p-2 rounded w-full bg-stone-100"
                name=""
                id="Expected Salary"
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
              >
                <option value="30-50">30-50 k</option>
                <option value="50-70">50-70 k</option>
                <option value="80-100">80-100 k</option>
                <option value="110-150">110-150 k</option>
              </select>
            </section>
          </div>
        </div>
        {/* ----------------------------- Experience Age-------------------- */}
        <div className="w-full">
          <div className=" w-full flex-col lg:flex-row lg:flex justify-evenly p-3 gap-4 ">
            <section className="lg:w-[50%] mb-6 lg:mb-0">
              <label htmlFor="Experience">Experience</label>
              <select
                className="p-2 rounded w-full bg-stone-100"
                name=""
                id="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1-3">1-3 Years</option>
                <option value="4-7">4-7 Years</option>
                <option value="8-10">8-10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </section>
            <section className="lg:w-[50%]">
              <label htmlFor="Age">Age</label>
              <select
                className="p-2 rounded w-full bg-stone-100"
                name=""
                id="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="20-23 ">20-23 Years</option>
                <option value="24-27 ">24-27 Years</option>
                <option value="27-30 ">27-30 Years</option>
                <option value="30-35 ">30-35 Years</option>
                <option value="35 ">35+ Years</option>
              </select>
            </section>
          </div>
        </div>
        {/* --------------------------- Get Resume(PDF)--------------------- */}
        <div className="border-dashed border-gray-600 border-2 w-full p-3 cursor-pointer rounded mt-4 flex justify-center">
          <label className="text-gray-800 font-semibold" htmlFor="Resume">
            Select Resume
          </label>
          <input
            className="hidden"
            type="file"
            name=""
            id="Resume"
            accept=".pdf"
          />
        </div>
        {/* --------------------------- Skills and Country */}
        <div className="flex flex-col lg:justify-between lg:items-center gap-4 lg:flex-row  w-full ">
          <div className=" lg:w-[50%]">
            <TagsFormEmployer setSkills={setSkills}></TagsFormEmployer>
          </div>
          <div className="lg:w-[50%] lg:mt-5">
            <section className=" mb-6 lg:mb-0">
              <label htmlFor="Country">Country</label>
              <select
                className="p-2 rounded w-full bg-stone-100"
                name=""
                id="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="England">England</option>
              </select>
            </section>
          </div>
        </div>
        {/* ---------------------------- Description------------------------ */}
        <div>
          <textarea
            className="border-none rounded-md bg-slate-300 mt-6 p-2 resize-none w-full text-black"
            name=""
            id=""
            cols={cols}
            rows="7"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button>Save</button>
      </form>
    </div>
  );
};

export default EmployerForm;
