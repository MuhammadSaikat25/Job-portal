import { useContext, useEffect, useState } from "react";
import TagFormCandidate from "./TagFormCandidate";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import axios from "axios";
const CompanyForm = () => {
  const { user } = useContext(AuthContext);
  const [work, setWork] = useState([]);
  const [cols, setCols] = useState(getInitialCols());
  const a = 10;
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
  const crateProfile = async (e) => {
    e.preventDefault();

    const img = e.target.img.files[0];
    let body = new FormData();
    body.set("key", `${import.meta.env.VITE_IMGBB}`);
    body.append("image", img);

    const res = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });

    const name = e.target.company.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const website = e.target.website.value;
    const companyCreate = e.target.companyCreate.value;
    const team = e.target.team.value;
    const about = e.target.about.value;
    const data = {
      img: res.data.data.url,
      name,
      email,
      phone,
      website,
      companyCreate,
      team,
      about,
    };
    // console.log(data)
    const postCompany = await axios.post(
      `${import.meta.env.VITE_SERVER}/postCompanyData`,
      data
    );
    console.log(postCompany);
  };
  return (
    <div className="bg-white rounded-md p-4 lg:p-10 mt-6">
      <form onSubmit={crateProfile} className="w-full">
        {/* ------------------- Logo --------------------------- */}
        <div className="border border-dashed w-fit rounded-md p-7 border-stone-900">
          <label htmlFor="image">Profile</label>
          <input
            className="hidden"
            type="file"
            name="img"
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
              name="company"
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
              name="email"
              id="Email"
              placeholder="microsoft@gmail.com"
              value={user?.email}
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
              name="phone"
              placeholder="1662 3726 2827"
              required
            />
          </section>
          <section className="w-full">
            <label htmlFor="Website">Website</label>
            <input
              className="border mt-3 w-full bg-gray-300 border-none border-stone-600 rounded-md p-2"
              type="text"
              name="website"
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
              name="companyCreate"
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
              name="team"
              placeholder="500-1500"
              required
            />
          </section>
        </div>

        {/* ---------------------About Company------------------ */}
        <div>
          <textarea
            className="border-none rounded-md bg-slate-300 mt-6 p-2 resize-none w-full text-black"
            name="about"
            id=""
            cols={cols}
            rows="7"
            placeholder="About Company"
            required
          ></textarea>
        </div>
        {/* ------------------ Btn----------------- */}
        <button className="text-white bg-blue-700 p-1 rounded-md w-full mt-3.">
          Create Company
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
