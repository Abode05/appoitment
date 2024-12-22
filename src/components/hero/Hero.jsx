import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/assets/images/team.jpg"
              width={800}
              height={800}
              className=" rounded "
            />
          </div>

          <div className="lg:py-8">
            <h2
                 className="text-3xl font-bold sm:text-5xl
                 lg:text-6xl  text-headingColor"
            >
              Find & book Appoitment with your Fav{' '}
              <span className="text-indigo-600 font-extrabold"> Doctor</span>
            </h2>
            <p className="mt-4 text-textColor max-w-md ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt.
            </p>

            <div
              className="mt-[30px] lg:mt-[25px] flex lg:flex-row items-center 
                gap-5 lg:gap-[30px]  max-w-lg justify-between"
            >
              <div className="flex flex-col text-center items-start">
                <h2 className="text-3xl  lg:text-4xl font-semibold z-10 text-blue-50">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                <p className="text_para text-[16px] font-semibold">
                  Years of experience
                </p>
              </div>
              <div>
                <h2 className="text-3xl text-blue-50 lg:text-4xl font-semibold">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text_para text-[16px] font-semibold">
                  Clinic locations
                </p>
              </div>
              <div>
                <h2 className="text-3xl text-blue-50 z-20 lg:text-4xl font-semibold">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text_para text-[16px] font-semibold">
                  Patient satisfaction
                </p>
              </div>
            </div>

            <Link
              to={'/doctors'}
              className="mt-6 inline-block text-md rounded bg-indigo-600 px-8 py-3  font-medium text-white 
                  transition hover:bg-indigo-700 focus:outline-none
                   "
            >
              Book Appoitment Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero