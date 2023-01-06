import React, {PropsWithChildren, useCallback, useEffect} from "react";
import '../assets/css/dropDown.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import {useOutsideAlert} from "../hooks/outsideAlert"; // <-- import styles to be used

type DropDownProps = {
  className?: string;
  title: string;
}
const DropDown = ({className, title, children}: PropsWithChildren<DropDownProps>) => {
  const { visible, setVisible, ref } = useOutsideAlert(false)
  const [arrow, setArrow] = React.useState(false);

  useEffect(() => {
    if(!visible){
      setArrow(false)
    }
  },[visible])

  const handleClick = useCallback(() => {
    if(!arrow){
      setArrow(true);
      setVisible(true)
    }else{
      setArrow(false);
      setVisible(false)
    }

  }, [arrow,visible]);

  const ArrowDropDown = useCallback(() => {
    if (arrow) {
      return <FontAwesomeIcon icon={solid('chevron-up')} className="ml-1 mt-1 cursor-pointer w-4"/>
    }
    return <FontAwesomeIcon icon={solid('chevron-down')} className="ml-1 mt-1 cursor-pointer w-4"/>
  }, [arrow])

  return (
    <div className={`flex flex-col text-white ml-6 ${className}`}>
      <div className="flex flex-row cursor-pointer" onClick={handleClick}>
        <p className="mr-2">{title}</p>
        <ArrowDropDown/>
      </div>
      {arrow && visible &&
          <div className="text-black p-2 bg-white text-sm rounded space-y-1 absolute position" ref={ref}>
            {children}
          </div>
      }
    </div>
  );
}

export default React.memo(DropDown);