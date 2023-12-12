import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import axios from "axios";
import useAxiosInterceptor from "../../../../hooks/useAxiosInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyForm = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [loading, setLoading] = useState(false);
  const [companyCreated, setCompanyCreated] = useState({});
  const [cols, setCols] = useState(getInitialCols());
  // ! ---------------------------------all function--------------------------
  function getInitialCols() {
    return window.innerWidth >= 1024 ? 150 : 50;
  }
  useEffect(() => {
    axiosInterceptor
      .get(`/getCompany/${user?.email}`)
      .then((res) => setCompanyCreated(res.data));
    function handleResize() {
      setCols(getInitialCols());
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [user?.email]);

  const crateProfile = async (e) => {
    setLoading(true);
    e.preventDefault();
    const companyRes = await axiosInterceptor.get(`/getCompany/${user?.email}`);
    setCompanyCreated(companyRes.data);

    if (companyCreated?._id) {
      return toast("Already Company Created");
    }
    const img = e.target.img.files[0];
    let body = new FormData();
    body.set("key", `${import.meta.env.VITE_IMGBB}`);
    body.append("image", img);
    const name = e.target.company.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const website = e.target.website.value;
    const companyCreate = e.target.companyCreate.value;
    const team = e.target.team.value;
    const about = e.target.about.value;

    try {
      const res = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      });
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
      const postCompany = await axiosInterceptor.post(
        `${import.meta.env.VITE_SERVER}/postCompanyData`,
        data
      );
      setLoading(false);
      if (postCompany.status === 200) {
        toast("Company Created Successful");
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white rounded-md p-4 lg:p-10 mt-6">
      <ToastContainer></ToastContainer>
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
              value={userEmail || ""}
              readOnly
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
        {loading ? (
          <h1 className="text-center font-semibold text-orange-300">
            loading..
          </h1>
        ) : (
          <button className="text-white bg-blue-700 p-1 rounded-md w-full mt-3.">
            Create Company
          </button>
        )}
      </form>
    </div>
  );
};

export default CompanyForm;
