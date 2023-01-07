import React from "react";

type CardProps = {
  className?: string;
  title: string;
  number: number;
}

const Card = ({className, title, number}: CardProps) => {
  return (
    <div className={`flex flex-col bg-white shadow-2xl text-center h-40 w-52 rounded-2xl ${className}`}>
      <div className="m-auto">
        <p className="font-bold">{title}</p>
        <p className="font-bold text-5xl mt-4">{number}</p>
      </div>
    </div>
  );
}

export default React.memo(Card);