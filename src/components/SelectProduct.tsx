import React, {useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

type SelectProductProps = {
  className?: string;
  title: string;
  setProduct:  React.Dispatch<React.SetStateAction<string>>
}

const SelectProduct = ({className,title,setProduct}:SelectProductProps) => {

  const handleClick = useCallback(()=>{
    setProduct(title);
  },[title,setProduct])

  return(
    <div className={`${className} cursor-pointer`} onClick={handleClick}>
      <div className="flex flex-row hover:bg-red-900 hover:text-orange-400 p-2">
        <FontAwesomeIcon icon={solid('chevron-right')} className="mr-1 mt-1 cursor-pointer w-3"/>
        <p className="">{title}</p>
      </div>
      <hr className="border-gray-500 w-full"/>
    </div>
  );
}

export default React.memo(SelectProduct);