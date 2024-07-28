import React from 'react';
import Sanjeev from '../assets/Sanjeev.svg';   
import Gurmeet from '../assets/Gurmeet.svg';
import Rohit from '../assets/Rohit.svg'
import Jassi from '../assets/Jassi.svg';
import Harsimran from '../assets/Harsimran.svg';
import Upkar from '../assets/Upkar.svg';
import Sanika from '../assets/Sanika.svg';

const teamData = [
  {
    img: Sanjeev, 
    name: 'John Doe',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/johndoe'
  },
  {
    img: Gurmeet,
    name: 'Jane Smith',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/janesmith'
  },
  {
    img: Rohit,
    name: 'Emily Johnson',
    title: 'iOS/Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/emilyjohnson'
  },
  {
    img: Jassi,
    name: 'Michael Brown',
    title: 'Marketing Director',
    linkedin: 'https://www.linkedin.com/in/michaelbrown'
  },
  {
    img: Harsimran,
    name: 'Linda Davis',
    title: 'Chief Operating Officer',
    linkedin: 'https://www.linkedin.com/in/lindadavis'
  },
  {
    img: Upkar,
    name: 'Robert Wilson',
    title: 'Product Manager',
    linkedin: 'https://www.linkedin.com/in/robertwilson'
  },
  {
    img: Sanika,
    name: 'Sarah White',
    title: 'Senior Developer',
    linkedin: 'https://www.linkedin.com/in/sarahwhite'
  },
];

const MeetOurTeamPage = () => {
    return (
        <div className="flex flex-col items-center bg-white">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg font-medium mb-2">Innovative. Strategic. Passionate.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="w-[159.343px] h-[210.783px] flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={`${member.name}'s picture`}
                  className="w-[153.059px] h-[204.079px]"
                />
                <h3 className="text-[16px] font-[500] leading-[20.16px] font-Outfit">{member.name}</h3>
                <p className="text-[14px] font-[400] leading-[17.64px] font-Outfit">{member.title}</p>
                <a
                  href={member.linkedin}
                  className="text-[12px] font-[400] leading-normal text-[#1F59DA] text-center font-Outfit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      );
};

export default MeetOurTeamPage;
