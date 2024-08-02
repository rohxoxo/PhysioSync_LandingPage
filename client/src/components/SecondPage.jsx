import React from 'react';
import Feature1Icon from '../assets/PPM.svg';
import Feature2Icon from '../assets/EVL.svg';
import Feature3Icon from '../assets/AppleWatch.svg';
import Feature4Icon from '../assets/AMLM.svg';
import Feature5Icon from '../assets/ReminderNotification.svg';
import Feature6Icon from '../assets/SVG.svg';

const cardsData = [
  {
    icon: Feature1Icon,
    title: 'Personalized Plans',
    description: 'Get custom exercise plans tailored to your recovery needs.',
  },
  {
    icon: Feature2Icon,
    title: 'Expert Video Lessons',
    description: 'Access instructional videos from certified physiotherapists.',
  },
  {
    icon: Feature3Icon,
    title: 'Track with Apple Watch',
    description: 'Monitor your progress and get reminders through your Apple Watch.',
  },
  {
    icon: Feature4Icon,
    title: 'Advanced Monitoring',
    description: 'Track your improvement with detailed analytics and feedback.',
  },
  {
    icon: Feature5Icon,
    title: 'Reminders & Notifications',
    description: 'Stay on track with regular reminders and notifications.',
  },
  {
    icon: Feature6Icon,
    title: 'Seamless Integration',
    description: 'Integrate with other health apps and devices for a holistic view.',
  },
];

const SecondPage = () => {
  return (
    <div className="flex flex-col items-center py-12 md:p-16 lg:p-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 md:mb-8 lg:mb-10 text-center">
        Why You Should Use PhysioSync
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="border border-primary-PSync rounded-xl p-4 md:p-6 lg:p-8 flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-full max-w-xs md:max-w-md lg:max-w-lg"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-3 md:mb-4 lg:mb-5">
              <img src={card.icon} alt={`${card.title} Icon`} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
              {card.title}
            </h3>
            <p className="text-base md:text-lg lg:text-xl font-light text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
