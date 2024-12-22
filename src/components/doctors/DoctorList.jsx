import DoctorCard from "./DoctorCard"
import doctors from '../../../public/assets/data/doctors.json'
import { useState } from "react"

const DoctorList = () => {
  return (
    <section>
      <div className="container">
        <div className="">
          <h2 className="heading text-center">
            our great <span className="text-indigo-600">Doctor</span>
          </h2>
          <p className="text_para text-center">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            perferendis?
          </p>
        </div>
        <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-6 lg:mt-8">
          {doctors.slice(3, 6).map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorList