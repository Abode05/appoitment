const About = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-7 xl:gap-0">
          {/* about img */}
          <div className="relative w-full lg:w-1/2 xl:w-5/12 z-10 order-2 lg:order-1">
            <img
              src="/assets/doctors/doc14.png"
              alt="About"
              className=" h-[420px]  bg-blue-100  rounded-md object-contain mx-auto max-w-xs sm:max-w-sm lg:max-w-full"
            />
            <div className="absolute top-[60%] left-[50%] 
            transform  lg:translate-x-3/4 lg:left-[16%] drop-shadow w-[200px] lg:w-[300px]">
              <img
                src="/assets/images/about-card.png"
                alt="About Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* about content  */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl  font-bold mb-4 text-center 
            lg:text-left text-headingColor">
              Proud to be one of the nation's <span className="text-indigo-600">best</span> 
            </h2>
            <p className="text-base lg:text-lg text-center lg:text-left mb-4 text-textColor">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quaerat soluta dolorum similique architecto animi
              sint. Sapiente, quisquam magnam non sit rerum repellendus
              consequuntur esse?
            </p>
            <p className="text-textColor text-base lg:text-lg text-center lg:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, at labore. Corporis laborum eius voluptatibus
              molestias non quam illum officia!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
