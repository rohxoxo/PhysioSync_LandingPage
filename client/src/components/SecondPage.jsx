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
    <div className="flex flex-col items-center py-16">
      <h2 className="text-4xl font-semibold text-black mb-8">Why You Should Use PhysioSync</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="border border-primary-PSync rounded-xl p-6 flex flex-col items-start gap-6 w-80">
            <div className="w-12 h-12 mb-4">
              <img src={card.icon} alt={`${card.title} Icon`} />
            </div>
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <p className="text-base font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
