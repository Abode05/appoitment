import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdStar } from 'react-icons/io'
import DoctorAbout from '../../components/doctorDetails/DoctorAbout'
import DoctorFeedback from '../../components/doctorDetails/DoctorFeedback'
const DoctorDetails = () => {
  const { id } = useParams()
  const [doctorDetails, setDoctorDetails] = useState(null)
  const [suggestDdoctor, setsuggestDdoctor] = useState([])
  const [tap, settap] = useState('about')
  const [bookTime, setbookTime] = useState(false)
  useEffect(() => {
    fetch('/assets/data/doctors.json')
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((d) => d.id === id)
        setDoctorDetails(result)
        const suggest = data.slice(0, 5)
        setsuggestDdoctor(suggest)
      })
      .catch((error) => console.log(error))
  }, [id])

  console.log(id)
  console.log(suggestDdoctor)
  if (!doctorDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="hero_section">
      {' '}
      <div className="container mx-auto py-10 px-4">
        <h1 className="border-b mb-2 text-3xl font-bold ml-4 ">
          details Doctor{' '}
          <span className="text-blue-600  ">{doctorDetails.name}</span>{' '}
        </h1>
        {/* Main details section */}
        <div className="w-full flex flex-col lg:flex-row gap-5">
          {' '}
          <div className="flex flex-col   w-full lg:w-3/4">
            {' '}
            <div
              className="bg-[#2b3e4f] rounded-lg 
            shadow-lg p-6 flex gap-8 flex-col md:flex-row "
            >
              {/* Doctor image */}
              <div className="w-full lg:w-1/4">
                <img
                  src={doctorDetails.photo}
                  alt={doctorDetails.name}
                  className="rounded-lg w-full object-cover bg-[#34495e]"
                />
              </div>

              {/* Doctor info */}
              <div className="w-full lg:w-3/4 flex flex-col gap-3 ">
                <h1 className="text-3xl font-bold text-headingColor mb-1">
                  {doctorDetails.name}
                </h1>

                <p className=" text-xl text-blue-600 mb-1  ">
                  <span className="py-1 px-2 lg:py-1 lg:px-3 bg-headingColor lg:text-lg  rounded font-semibold">
                    {doctorDetails.specialty}
                  </span>
                </p>

                <div className="flex items-center text-textColor gap-2">
                  <IoMdStar />

                  <p className="text-lg">
                    {doctorDetails.avgRating} ({doctorDetails.totalRating}{' '}
                    reviews)
                  </p>
                </div>
                <div className="flex items-center text-textColor">
                  <p className="text-lg flex items-center gap-2">
                    <FaGraduationCap className="text-xl" />
                    <span className="font-bold ">
                      {doctorDetails.yearsExperience}
                    </span>{' '}
                    years of Experience
                  </p>
                </div>

                <div className="flex items-center text-textColor  gap-2">
                  <FaLocationDot />
                  <p className="text-lg">{doctorDetails.hospital}</p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setbookTime(true)}
                    className="bg-indigo-600 duration-150 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
            {/* About Doctor Section */}
            <div className="mt-10 p-6 bg-[#2b3e4f] rounded-lg shadow-lg ">
              <button
                onClick={() => settap('about')}
                className={`${
                  tap === 'about' && `border-b-2 border-indigo-600 `
                }   text-xl mr-4 font-bold text-headingColor
                 `}
              >
                About
              </button>
              {/* book time */}
              {bookTime && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className=" bg-[#2b3e4f] text-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">
                      Book Appointment
                    </h2>
                    {/* Select Day */}
                    <div className="mb-4">
                      <label
                        htmlFor="select-day"
                        className="block text-lg font-semibold mb-2"
                      >
                        Select a Day
                      </label>
                      <select
                        id="select-day"
                        className="w-full bg-slate-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                      >
                        <option value="">Choose a day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                      </select>
                    </div>

                    {/* Patient State */}
                    <div className="mb-4 ">
                      <label
                        htmlFor="patient-state"
                        className="block text-lg font-semibold mb-2"
                      >
                        Patient State
                      </label>
                      <textarea
                        id="patient-state"
                        rows="4"
                        className="w-full bg-slate-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        placeholder="Describe your condition briefly..."
                      ></textarea>
                    </div>

                    {/* Contact Doctor */}
                    <div className="mb-4">
                      <label
                        htmlFor="contact-doctor"
                        className="block text-lg font-semibold mb-2"
                      >
                        Contact Doctor
                      </label>
                      <input
                        type="email"
                        id="contact-doctor"
                        className="w-full border-gray-300 bg-slate-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        placeholder="Your email"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                      <button
                        onClick={() => setbookTime(false)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => console.log("succses send")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/*  */}
              <button
                onClick={() => settap('feedback')}
                className={`${
                  tap === 'feedback' && ` border-indigo-600  border-b-2 `
                } text-headingColor text-xl font-bold `}
              >
                feedback
              </button>
              <div className="mt-8">
                {tap === 'about' && (
                  <DoctorAbout doctorDetails={doctorDetails} />
                )}
                {tap === 'feedback' && <DoctorFeedback />}
              </div>
            </div>
            {/* end about section */}
          </div>
          {/* suggest section */}
          <div className="w-full lg:w-1/4 px-2 py-4  rounded-md  bg-[#2b3e4f] shadow-md ">
            <h1 className="text-3xl text-headingColor font-bold border-b border-textColor py-1">
              suggestion
            </h1>
            <div className="flex flex-col gap-10 mt-8">
              {suggestDdoctor.map((item, index) => (
                <Link
                  to={`/doctors/${item.id}`}
                  key={index}
                  className="flex  items-center gap-2 hover:bg-[#34495e] duration-150 p-1 rounded-md "
                >
                  <img
                    src={item.photo}
                    alt=""
                    className="rounded-full h-20 w-20 object-contain bg-[#34495e]  "
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-bold text-headingColor mb-1">
                      {doctorDetails.name}
                    </h1>
                    <p className=" text-sm text-blue-600 mb-1  ">
                      <span className="py-1 px-2  bg-headingColor text-sm  rounded font-semibold">
                        {doctorDetails.specialty}
                      </span>
                    </p>
                    <div className="flex items-center text-textColor">
                      <p className="text-sm flex items-center gap-2">
                        <FaGraduationCap className="text-lg" />
                        <span className="font-bold ">
                          {doctorDetails.yearsExperience}
                        </span>{' '}
                        years of Experience
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
// https://flowbite.com/docs/components/skeleton/
