import { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedBackForm = () => {
    const [Ratting, setRatting] = useState(0)
  const [Hover, setHover] = useState(0)
  const [ReviewText, setReviewText] = useState('')

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // later will with api
  }
    return (
      <form action="" className="mt-4 border-t">
        {' '}
        <div>
          <h1 className="text-headingColor text-lg font-semibold ">
            How would you rate the overall experience?
          </h1>
          <div className="">
            {[...Array(5).keys()].map((_, index) => {
              index += 1
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index <= (Ratting || Hover)
                      ? 'text-yellow-500'
                      : 'text-gray-400'
                  } bg-transparent`}
                  onClick={() => setRatting(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(Ratting)}
                  onDoubleClick={() => {
                    setHover(0)
                    setRatting(0)
                  }}
                >
                  <span>
                    <FaStar />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="">
          <h1 className="text-headingColor text-lg font-semibold mt-2 ">
            share your feedback or suggestion
          </h1>
          <textarea rows={4}
            onChange={(e)=>setReviewText(e.target.value)}
            placeholder="write your message"
            className="border border-gray-400 w-full px-2 py-2 text-textColor
            bg-transparent focus:outline mt-2 outline-indigo-600 rounded-md" name="" id=""></textarea>
        </div>
        <button type="submit" onClick={handleSubmitReview} className="text-white px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 duration-150 ">submit review</button>
      </form>
    )
}

export default FeedBackForm