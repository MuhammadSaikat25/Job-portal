import { useEffect, useState } from "react";
import TagFormCandidate from "./TagFormCandidate";

const CompanyForm = () => {
  const [work, setWork] = useState([]);
  const [cols, setCols] = useState(getInitialCols());

  // ! ---------------------------------all function--------------------------
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
  return (
    <div className="bg-white rounded-md p-4 lg:p-10 mt-6">
      <form className="w-full">
        <div className="border border-dashed w-fit rounded-md p-7 border-stone-900">
          <label htmlFor="image">Profile</label>
          <input
            className="hidden"
            type="file"
            name=""
            id="image"
            accept="image/*"
          />
        </div>
        {/* ---------------------- Name and email------------------------ */}
        <div className="mt-4 flex flex-col gap-4 lg:flex-row w-full items-center justify-between">
          <section className="w-full">
            <label className="" htmlFor="Company name">
              Company name
            </label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="text"
              id="Company name"
              placeholder="Microsoft"
              required
            />
          </section>
          <section className="w-full">
            <label htmlFor="Email">Email address</label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="email"
              id="Email"
              placeholder="microsoft@gmail.com"
              required
            />
          </section>
        </div>
        {/* -------------------Phone and website----------------- */}
        <div className="mt-4 flex flex-col gap-4 lg:flex-row w-full items-center justify-between">
          <section className="w-full">
            <label className="" htmlFor="Phone">
              Phone
            </label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="number"
              id="Phone"
              placeholder="1662 3726 2827"
              required
            />
          </section>
          <section className="w-full">
            <label htmlFor="Website">Website</label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="text"
              name=""
              id="Website"
              placeholder="www.microsoft.com"
              required
            />
          </section>
        </div>
        {/* -------------------- Est. Since team size----------------- */}
        <div className="mt-4 flex flex-col gap-4 lg:flex-row w-full items-center justify-between">
          <section className="w-full">
            <label className="" htmlFor="Est. Since">
              Est. Since
            </label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="date"
              id="Est. Since"
              required
            />
          </section>
          <section className="w-full">
            <label htmlFor="Team Size">Team Size</label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="text"
              id="Team Size"
              placeholder="500-1500"
              required
            />
          </section>
        </div>
        <TagFormCandidate setWork={setWork}></TagFormCandidate>
        {/* ---------------------About Company------------------ */}
        <div>
          <textarea
            className="border-none rounded-md bg-slate-300 mt-6 p-2 resize-none w-full text-black"
            name=""
            id=""
            cols={cols}
            rows="7"
            placeholder="About Company"
          ></textarea>
        </div>
        {/* ------------------ Btn----------------- */}
        <button className="text-white bg-blue-700 p-1 rounded-md w-full mt-3.">
          Save
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
