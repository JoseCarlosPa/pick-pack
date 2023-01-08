import React from 'react';

type IconCardProps = {
  icon: string;
  title: string;
  description: string;
  number: string;
  className?: string;
}

const IconCard = ({icon, title, description,number,className}:IconCardProps) => {

  return(
    <div className={`border-gray-500 shadow-md p-8 flex flex-col w-72 ${className}`}>
      <img src={icon} alt="icon" className="h-26 w-16"/>
      <div className="flex flex-row mt-4">
        <p className="text-6xl font-bold text-gray-300">{number}</p>
        <p className="text-2xl font-bold -ml-16 py-3">{title}</p>
      </div>
      <p className="text-left mt-4">{description}</p>
    </div>
  );
}

export default React.memo(IconCard);