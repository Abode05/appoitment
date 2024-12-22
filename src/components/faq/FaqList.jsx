import { faqs } from '../../../public/assets/data/faqs'
import FaqItem from './FaqItem'
const FaqList = () => {
  return (
    <section>
      <div className="container ">
        <div className="flex justify-between flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="">
            <img
              src="/assets/images/dd.jpg"
              alt="jij"
              loading="lazy"
              className="w-[500px] h-[450px] mt-4 object-cover rounded-lg "
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading mt-2 ">
              Most our beloved <span className="text-indigo-600">patient</span>{' '}
            </h2>
            {/* faq List  */}
            <div className="mt-8">
              {faqs.map((item, index) => (
                <FaqItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqList
