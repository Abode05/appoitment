import { useState } from "react"
import { FaStar } from "react-icons/fa"
import FeedBackForm from "./FeedBackForm"

const DoctorFeedback = () => {
    const [ShowForm, setShowForm] = useState(false)
  return (
    <div>
      <div className="max-w-md    p-6 mt-4">
        <div className="">
          {' '}
          <h2 className="text-xl text-headingColor font-semibold">
            All reviews (272)
          </h2>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/40" // Placeholder for the user's avatar
              alt="User"
              className="rounded-full"
            />
            <div className="ml-4 flex   justify-between max-w-sm w-full">
              <div className="">
                <p className="font-semibold text-headingColor">Ali Ahmed</p>
                <p className="text-sm text-gray-500">Feb 14, 2023</p>
              </div>
              <div className="flex mt-1 ">
                {/* Star ratings */}
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2 text-textColor">
            Good services, highly recommended{' '}
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </p>
        </div>
        {!ShowForm && (
          <div className="mt-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 px-2 py-1 text-lg font-semibold rounded-lg "
            >
              Give feedback{' '}
            </button>
          </div>
        )}

        {ShowForm && <FeedBackForm />}
      </div>
    </div>
  )
}

export default DoctorFeedback