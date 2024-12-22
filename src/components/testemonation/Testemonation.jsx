import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiStar } from 'react-icons/hi'
import {  testimonials } from '../../../public/assets/data/data'

const Testemonation = () => {
  return (
 <section>
  <div className="container">
    <div className="">
      <h2 className="heading text-center">Our Great Patients</h2>
      <p className="text_para text-center">
         eslint-disable-next-line react/no-unescaped-entities
        Here's what some of our patients have to say about their experience.
      </p>
    </div>
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index} className='mt-6'>
          <div className="px-5 py-8">
            <div className="flex items-center gap-5">
              <img src={item.img} alt="Patient Avatar" className='rounded-full' />
              <div className="">
                <h4 className="text-xl text-headingColor font-semibold">
                  {item.name}
                </h4>
                <div className="flex items-center">
                  {Array.from({ length: item.star }).map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-4 h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg mt-4 text-gray-300 font-medium">
              {item.desc}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  )
}

export default Testemonation
