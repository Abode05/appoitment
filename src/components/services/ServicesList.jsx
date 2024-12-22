import { services } from "../../../public/assets/data/services"
import ServiceCard from "./ServiceCard"

const ServicesList = () => {
  return (
    <section>
      <div className="container ">
        <div className="">
          <h2 className="heading text-center">
            our medical <span className="text-indigo-500 ">services</span>{' '}
          </h2>
          <p className="text_para text-center">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            perferendis?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 lg:mt-5 ">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} item={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList