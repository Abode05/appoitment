import React from 'react'
import { services } from '../../public/assets/data/services'
import ServiceCard from '../components/services/ServiceCard'

const Services = () => {
  return (
    <section className="hero_section">
      <div className="relative flex justify-center items-center">
        <img
          src="/assets/images/register-img.png"
          alt="Doctors Background"
          className="h-[300px] w-full object-cover"
        />
        <h1 className="absolute text-6xl text-white font-bold ">Services</h1>
      </div>
      <div className="container ">
        {' '}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             gap-5 lg:gap-7 lg:mt-5 "
        >
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} item={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services