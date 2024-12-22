import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, item }) => {
    const { name, desc, bgColor, textColor } = item
    console.log(bgColor)
  return (
    <div
      className="py-4 px-3 lg:px-4 border
     rounded border-[#8dc6ff] shadow flex flex-col justify-between "
    >
      <h2 className="text-2xl  leading-5 text-headingColor font-bold ">
        {name}
      </h2>
      <p className="text-lg max-w-xs leading-5 font-[300] text-textColor mt-4">
        {desc}
      </p>
      <div className={`flex justify-between items-center  mt-4   `}>
        {' '}
        <span
          className={`w-10 h-10 flex items-center justify-center
                 text-lg font-bold rounded-md px-2`}
          style={{ background: bgColor, color: textColor }}
        >
          {index + 1}
        </span>
        <Link
          to={'/services'}
          className="w-[44px] h-[44px] rounded-full mt-4
                    
                  flex items-center justify-center group hover:bg-indigo-700  bg-indigo-500 hover:border-none duration-200       "
        >
          <BsArrowRight className="group-hover:text-[#8dc6ff] text-[#8dc6ff] w-6 h-6 " />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard