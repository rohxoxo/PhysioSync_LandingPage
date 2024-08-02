import React from 'react';
import CompanyLogo from '../assets/TRY.svg';

const TryITRightNow = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <img
        src={CompanyLogo}
        alt="Company Logo"
        className="w-3/4 md:w-1/2 lg:w-1/3 max-w-sm"
      />
    </div>
  );
}

export default TryITRightNow;
