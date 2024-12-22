import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  // JSON data as a constant
  const footerData = {
    company: {
      name: 'Medicare',
      copyright: 'Copyright © 2023 developed by Munibur Rahman',
      rights: 'All rights reserved.',
    },
    socialLinks: [
      {
        icon: FaFacebookF,
        url: '#',
      },
      {
        icon: FaTwitter,
        url: '#',
      },
      {
        icon: FaYoutube,
        url: '#',
      },
      {
        icon: FaLinkedinIn,
        url: '#',
      },
    ],
    quickLinks: ['Home', 'About Us', 'Services', 'Blog'],
    iWantTo: [
      'Find a Doctor',
      'Request an Appointment',
      'Find a Location',
      'Get an Opinion',
    ],
    support: ['Donate', 'Contact Us'],
  }

  return (
    <section className=" hero_section  py-4 border-t">
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-16 text-center
       md:text-left text-headingColor">
        {/* Company Info */}
        <div>
          <h1 className="text-xl font-bold">{footerData.company.name}</h1>
          <p className="text-gray-400">{footerData.company.copyright}</p>
          <p className="text-gray-400">{footerData.company.rights}</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-blue-500"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {footerData.quickLinks.map((link, index) => (
              <li
                key={index}
                className="text-gray-400  cursor-pointer hover:text-blue-600"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* I Want To */}
        <div>
          <h2 className="text-lg font-semibold">I want to:</h2>
          <ul className="mt-4 space-y-2 flex flex-col">
            {footerData.iWantTo.map((item, index) => (
              <Link
                to={'/'}
                key={index}
                className="text-gray-400 cursor-pointer hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold">Support</h2>
          <ul className="mt-4 space-y-2 flex flex-col">
            {footerData.support.map((item, index) => (
              <Link to={"/"}
                key={index}
                className="text-gray-400 cursor-pointer hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
