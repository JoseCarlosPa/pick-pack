import React from "react";

type NavbarItemProps = {
  className?: string;
  title: string;
  link?: string;
}

const NavbarItem = ({className, title, link}: NavbarItemProps) => {
  return (
    <a href={link}>
      <div className={`flex flex-row text-white hover:text-gray-100 hover:underline ml-6 ${className}`}>
        <p className="cursor-pointer">{title}</p>
      </div>
    </a>
  );
};

export default React.memo(NavbarItem);