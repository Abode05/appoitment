import React from 'react'
const educationData = [
    {
        date: '23 June, 2008',
        degree: 'PhD in Surgeon',
        institution: 'New Apollo Hospital, New York',
    },
    {
        date: 'December 4, 2010',
        degree: 'PhD in Surgeon',
        institution: 'New Apollo Hospital, New York',
    },
];
const experienceData = [
    {
      startDate: "Jul 6, 2010",
      endDate: "Aug 11, 2014",
      position: "Sr. Surgeon",
      institution: "New Apollo Hospital, New York",
    },
    {
      startDate: "Jul 6, 2010",
      endDate: "Aug 11, 2014",
      position: "Sr. Surgeon",
      institution: "New Apollo Hospital, New York",
    },
  ];
const DoctorAbout = ({ doctorDetails }) => {
  return (
    <div className="text-textColor">
      <h1 className="text-3xl font-bold text-headingColor mb-2">
        about of <span className="text-indigo-700">{doctorDetails.name}</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        consequatur perspiciatis sit ipsam iure nobis vel nostrum sed quam
        laborum quasi ratione corporis, suscipit cupiditate, possimus voluptatem
        necessitatibus nihil quisquam!
      </p>
      <div className="p-4 mt-4">
        <h2 className="text-xl font-bold mb-4 text-headingColor">Education</h2>
        <ul>
          {educationData.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <div className="text-teal-500 font-semibold">{item.date}</div>
              <div className="text-gray-400">{item.degree}</div>
              <div className="text-gray-400">{item.institution}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* experience */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul className="flex space-x-4">
          {experienceData.map((item, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-md shadow-md flex-1"
            >
              <div className="text-teal-600 font-semibold mb-2">
                {item.startDate} - {item.endDate}
              </div>
              <div className=" text-headingColor font-medium">{item.position}</div>
              <div className="text-gray-400">{item.institution}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout