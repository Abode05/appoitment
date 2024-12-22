/* eslint-disable react/prop-types */
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

// eslint-disable-next-line react/prop-types
const FaqItem = ({ item }) => {
        const [isOpen, setisOpen] = useState(false)
        const toggleacording = () => {
          setisOpen(!isOpen)
        }
  return (
    <div
      className="p-3 lg:p-4 rounded-md border border-[#d9d3ce] mb-4   cursor-pointer 
    mt-4"
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className="text-lg lg:text-xl text text-headingColor font-bold">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && 'bg-[#8dc6ff] text-white duration-150 border-none'
          }
                            w-5 h-5 lg:h-6 lg:w-6 border border-indigo-100 rounded flex justify-center items-center`}
          onClick={toggleacording}
        >
          {isOpen ? (
            <AiOutlineMinus className="text-white" />
          ) : (
            <AiOutlinePlus className="text-white" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="text-gray-500 mt-1">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  )
}

export default FaqItem