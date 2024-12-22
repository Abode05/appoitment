import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'

const DoctorCard = ({ doctor }) => {
  const {
    id,
    name,
    avgRating,
    specialty,
    totalRating,
    photo,
    yearsExperience,
    hospital,
  } = doctor

  return (
    <div className=" rounded outline outline-2 outline-[#34495e] ">
      <div>
        <img
          src={photo || '/assets/images/default-doctor.png'}
          alt={`${name}'s profile`}
          className=" bg-[#34495e] object-cover h-64  w-full "
        />
      </div>
      <div className="p-3 lg:p-4 flex flex-col justify-between">
        <h2 className="text-lg leading-3 lg:text-xl text-headingColor font-bold mt-1">
          {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-headingColor text-blue-700 py-1 px-2 lg:py-1 lg:px-3 text-sm lg:text-lg  rounded font-semibold">
            {specialty}
          </span>
          <div className="flex items-center gap-1">
            <span className="flex items-center gap-1 text-headingColor text-lg font-semibold">
              <img src={`/assets/images/Star.png`} alt="Rating" />
              {avgRating}
            </span>
            <span className="text-sm lg:text-lg font-medium text-textColor">
              ({totalRating})
            </span>
          </div>
        </div>
        <div className="mt-[18px] lg:mt-2 flex items-center justify-between">
          <div>
            <h1 className="text-sm lg:text-lg  text-gray-400">
              +{yearsExperience} years exp
            </h1>
            <p className="  max-w-[200px] text-headingColor">
              {hospital}
            </p>
          </div>
          <Link
            to={`/doctors/${id}`}
            className="w-[44px] h-[44px] rounded-full mt-6
                  
                  flex items-center justify-center group hover:bg-indigo-700  bg-indigo-600 hover:border-none duration-200       "
          >
            <BsArrowRight className="group-hover:text-[#8dc6ff] text-[#8dc6ff] w-6 h-6 " />
          </Link>
        </div>
      </div>
    </div>
  )
}



export default React.memo(DoctorCard)
