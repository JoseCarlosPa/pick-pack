import React from "react";
import {Link} from 'react-router-dom'

type NavbarItemProps = {
  className?: string;
  title: string;
  link: string;
}

const NavbarItem = ({className, title, link}: NavbarItemProps) => {
  return (
    <Link to={link}>
      <div className={`flex flex-row text-white hover:text-gray-100 hover:underline ml-6 ${className}`}>
        <p className="cursor-pointer">{title}</p>
      </div>
    </Link>
  );
};

export default React.memo(NavbarItem);