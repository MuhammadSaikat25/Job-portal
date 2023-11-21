import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/man1.png";
import img2 from "../../assets/man2.png";
import img3 from "../../assets/man3.png";

const Testimonials = () => {
  return (
    <div className="bg-slate-200 p-10 mt-36">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="font-semibold lg:text-3xl mb-3">
            Testimonials From Our Customers
          </h1>
          <h1 className="text-gray-600">
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
          </h1>
        </div>
        <div className="mt-7 ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className=" bg-slate-100 p-4 rounded-md">
              <h1 className="text-blue-700 mb-5 lg:text-2xl ">Good Theme</h1>
              <p>
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>
              <div className="flex items-center gap-5 mt-6">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={img1}
                  alt=""
                />
                <div className="">
                  <h1>Jone Doe</h1>
                  <h1>Web Developer</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-10 bg-slate-100 rounded-md">
              <h1 className="text-blue-700 mb-5 lg:text-2xl ">Good Theme</h1>
              <p>
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>
              <div className="flex items-center gap-5 mt-6">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={img2}
                  alt=""
                />
                <div className="">
                  <h1>Jone Doe</h1>
                  <h1>Web Developer</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-10 bg-slate-100 rounded-md">
              <h1 className="text-blue-700 mb-5 lg:text-2xl ">Good Theme</h1>
              <p>
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>
              <div className="flex items-center gap-5 mt-6">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={img3}
                  alt=""
                />
                <div className="">
                  <h1>Jone Doe</h1>
                  <h1>Web Developer</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
