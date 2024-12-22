import { useState } from "react"

const Contact = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission logic here (e.g., sending data to a server)
      console.log({ email, subject, message })
    }
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img
          src="/assets/images/register-img.png"
          alt="Doctors Background"
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute flex flex-col max-w-lg">
          {' '}
          <h2 className=" mb-4 text-5xl tracking-tight font-extrabold text-center text-headingColor">
            Contact Us
          </h2>{' '}
        </div>
      </div>
      <div className="">
        <p className=" max-w-lg text-xl mx-auto mt-8   text-center text-gray-400  sm:text-xl font-semibold">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div className="py-8 lg:py-10 mb-4 mt-2 px-4 mx-auto max-w-screen-md border rounded-lg border-indigo-400">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2.5 h-12 bg-transparent border
                 border-gray-300 rounded-lg 
                  text-white focus:border-indigo-500 outline-none"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 h-12 bg-transparent border border-gray-300 rounded-lg text-white focus:border-indigo-500 outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-semibold text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5  bg-transparent border border-gray-300 rounded-lg text-white focus:border-indigo-500 outline-none"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 sm:w-fit   focus:outline-none  "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact