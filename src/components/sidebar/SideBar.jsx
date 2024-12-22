import { faUnsorted, faUserDoctor, faUserMd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SideBar = ({ specialties, filterItem, iconMapping }) => {
  return (
    <div className=" w-full md:w-[25%]  rounded mt-8 shadow-lg p-4 flex flex-col gap-5 h-auto md:h-screen">
      {/* Select dropdown for small screens */}
      <div className="block md:hidden">
        <select
          className="w-full p-2 border outline-none focus:outline-none   border-gray-100 rounded-md bg-transparent text-headingColor "
          onChange={(e) => filterItem(e.target.value)}
        >
          <option value="ALL" className="text-headingColor   bg-[#22313f] ">
            All Specialties
          </option>
          {specialties.map((specialty, index) => (
            <option
              className="text-headingColor p-2  bg-[#22313f] "
              key={index}
              value={specialty.name}
            >
              {specialty.name}
            </option>
          ))}
        </select>
      </div>
      {/*  */}
      <ul
        className="hidden  text-center md:flex flex-col gap-4 overflow-x-auto
       custom-scrollbar mt-4"
      >
        <li
          className="flex items-center text-lg font-semibold 
                     gap-3 hover:bg-[#589adc] p-2 cursor-pointer rounded"
          onClick={() => filterItem('ALL')}
        >
          <span>
            <FontAwesomeIcon
              icon={faUserDoctor}
              className="h-6 w-6 text-gray-200"
            />
            ALL
          </span>
        </li>
        {specialties.map((specialty, index) => {
          const Icon = iconMapping[specialty.icon] || faUserMd
          return (
            <li
              key={index}
              className="flex items-center text-lg font-semibold 
                    gap-3 hover:bg-[#589adc] p-2 cursor-pointer rounded"
              onClick={() => filterItem(specialty.name)}
            >
              <span>
                <FontAwesomeIcon
                  icon={Icon}
                  className="h-6 w-6 text-gray-200"
                />
              </span>
              {specialty.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar