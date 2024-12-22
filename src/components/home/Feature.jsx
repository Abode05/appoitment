import { FaStar } from "react-icons/fa"

const Feature = () => {
  return (
    <section className="">
      <div className="container -mt-8 lg:-mt-1 ">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:px-7">
          {/* feature content */}
          <div className="lg:w-1/2   ">
            <h2 className="text-3xl text-headingColor  max-w-xl text-start w-full  lg:text-5xl  font-bold mb-6 leading-tight">
              Get virtual treatment <br />
              <span className="text-indigo-600">Any time</span>
            </h2>
            <ul className="space-y-4 mb-6 text-textColor">
              <li className="text-lg flex items-center gap-2">
                <FaStar className="text-indigo-500" />
                Schedule the appointment directly.
              </li>
              <li className="text-lg  flex items-center gap-2">
                <FaStar className="text-indigo-500" />
                Schedule the appointment directly and contact their office.
              </li>
              <li className="text-lg flex items-center gap-2 ">
                <FaStar className="text-indigo-500" />
                Schedule the appointment directly.
              </li>
            </ul>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Learn more!
            </button>
          </div>
          {/* feature image */}
          <div className="lg:w-1/2 relative z-10 flex justify-end">
            <img
              src="/assets/images/feature-img.png"
              alt="Feature Image"
              className=" object-contain"
            />
            <div
              className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px]
            left-0 md:bottom-[100px] pb-3   lg:pt-4 lg:px-5 lg:pb-[26px] z-20 rounded
            "
            >
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 lg:gap-3 ">
                  <p className="text-lg font-bold">Tue,24</p>
                  <p>10:00AM</p>
                </div>
                <span
                  className="h-5 w-5 lg:w-8 lg:h-8 flex items-center justify-center
                rounded py-1 px-2 relative lg:py-3 lg:px-4"
                >
                  <img
                    src="/assets/images/appointments.svg"
                    alt="defs "
                    className="object-cover  absolute"
                  />
                </span>
              </div>
              {/*  */}
              <div
                className="w-[70px] lg:w-[115px] bg-[#ccf0f3] py-1  lg:py-2   px-1 lg:px-2  text-[12px] leading-2 
              lg:text-lg text-irisBlueColor font-medium mt-2 lg:mt-4 rounded-xl "
              >
                consolation
              </div>
              {/*  */}
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[15px] ">
                <img src="/assets/images/avatar-icon.png" alt="" />
                <h4 className="text-[10px] lg:text-[16px] font-bold ">
                  wayne collies
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
