import React from 'react';
import Sanjeev from '../assets/Sanjeev.svg';   
import Gurmeet from '../assets/Gurmeet.svg';
import Rohit from '../assets/Rohit.svg';
import Jassi from '../assets/Jassi.svg';
import Harsimran from '../assets/Harsimran.svg';
import Upkar from '../assets/Upkar.svg';
import Sanika from '../assets/Sanika.svg';

const teamData = [
  {
    img: Sanjeev, 
    name: 'Sanjeev Mehta',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/sanjeev-mehta-ios/'
  },
  {
    img: Gurmeet,
    name: 'Gurmeet Singh',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/gurmeet--singh/'
  },
  {
    img: Rohit,
    name: 'Rohit Kumar',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/rohit0205/'
  },
  {
    img: Jassi,
    name: 'Jaspreet Singh',
    title: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/jaspreetdesign/'
  },
  {
    img: Harsimran,
    name: 'Harsimran Singh',
    title: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/harsimransingharora/'
  },
  {
    img: Upkar,
    name: 'Upkar Singh',
    title: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/upkarsinghdesign/'
  },
  {
    img: Sanika,
    name: 'Sanika Coutinho',
    title: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/sanika-coutinho/'
  },
];

const MeetOurTeamPage = () => {
    return (
        <div className="flex flex-col items-center bg-white p-4 md:p-8 lg:p-12">
          <section id ="team" >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Meet Our Team</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-6 text-center">Innovative. Strategic. Passionate.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {teamData.slice(0, 4).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={`${member.name}'s picture`}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-4 "
                />
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">{member.name}</h3>
                <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600">{member.title}</p>
                <a
                  href={member.linkedin}
                  className="text-sm md:text-base lg:text-lg font-medium text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {teamData.slice(4).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={`${member.name}'s picture`}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-4"
                />
                <h3 className="text-base md:text-lg lg:text-xl font-semibold">{member.name}</h3>
                <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600">{member.title}</p>
                <a
                  href={member.linkedin}
                  className="text-sm md:text-base lg:text-lg font-medium text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
          </section>
        </div>
    );
};

export default MeetOurTeamPage;
