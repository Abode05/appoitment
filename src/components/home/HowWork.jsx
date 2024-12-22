import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { howWork } from "../../../public/assets/data/data"

const HowWork = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:max-w-md mx-auto ">
          <h2 className="heading  text-center  ">
            providing the best{' '}
            <span className="text-blue-700">midical services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">
          {howWork.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center justify-center">
                <img src={item.img} alt="" />
              </div>
              <div className="mt-7">
                <h2 className="text-3xl leading-5 text-headingColor font-bold text-center">
                  {item.title}
                </h2>
                <p className="text_para text-center mt-4 ">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="w-[44px] h-[44px] rounded-full mt-4
                    mx-auto
                  flex items-center justify-center group hover:bg-indigo-700  bg-indigo-600 hover:border-none duration-200       "
                >
                  <BsArrowRight className="group-hover:text-[#8dc6ff] text-[#8dc6ff] w-6 h-6 " />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWork