import  { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Signup({ ToggleForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const fileInputRef = useRef(null)
  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    if (files) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: files[0],
          }))
    }else{    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))}

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    // Handle form submission (e.g., send data to backend)
    console.log(formData)
  }

  return (
    <div
      className="bg-[#22313f] rounded-lg shadow w-full
         max-w-xl p-4 relative  max-h-[95vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
          Create your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5   mt-4">
          <div className="flex justify-between items-center gap-4">
            {' '}
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-ha"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border h-12 border-gray-300 text-white rounded-lg outline-none focus:border-indigo-500 duration-150 block w-full p-2.5"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-ha"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border h-12 border-gray-300 text-white rounded-lg outline-none focus:border-indigo-500 duration-150 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className="flex  items-center justify-between gap-4  ">
            {' '}
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block  mb-2 text-sm font-semibold text-headingColor dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-transparent h-12 border border-gray-300 text-white
               rounded-lg outline-none focus:border-indigo-500 
               duration-150 block w-full py-2.5 px-4"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-semibold text-headingColor dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-transparent h-12 border border-gray-300 text-white
               rounded-lg outline-none focus:border-indigo-500 
               duration-150 block w-full py-2.5 px-4"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className=" flex flex-col gap-4 w-3/4">
              {' '}
              <div className="flex gap-6 items-center  ">
                <label
                  htmlFor="confirmPassword"
                  className="block  font-bold  text-headingColor dark:text-white"
                >
                  Are you a:
                </label>
                <select
                  name=""
                  id=""
                  className=" hero_section px-1 cursor-pointer border border-gray-300 text-white
               rounded-lg outline-none focus:border-indigo-500 
               duration-150 block w-1/4 h-7 text-sm "
                >
                  <option value="patient"> patient</option>
                  <option value="doctor"> doctor</option>
                </select>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 border border-indigo-500 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-textColor">
                    I agree to the{' '}
                    <Link
                      onClick={() => onClose()}
                      to="/terms"
                      className="text-primary-600 hover:underline"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <label
                htmlFor=""
                className="cursor-pointer relative text-subtitle  text-lg flex flex-col items-center "
              >
                Profile Image:
                <img
                  src={
                   
                      ` assets/profile-avatar.png`
                  }
                  alt=""
                  className="w-20 h-20 rounded-full mb-2 "
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  src="assets/profile-avatar.png"
                  className="hidden"
                  name="profile_image"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-3/4 mx-auto text-white
             bg-indigo-600 hover:bg-indigo-700 font-semibold
              rounded-lg text-lg px-5 py-2.5 text-center duration-150"
          >
            Sign Up
          </button>
          <p className="font-light text-textColor text-center ">
            Already have an account?{' '}
            <button
              onClick={ToggleForm}
              className="font-medium text-primary-600 hover:underline
             text-headingColor "
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
