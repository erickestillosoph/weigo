import { useEffect, useState, useRef } from "react";
import TextInput from "../TextInput";

export default function InputDropdown({ data = [], className = "", handleChange}) {
  
  const [optionsData, setOptionsData] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); 
  
  const dropdownRef = useRef(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option); 
    
  };

  const handleClick = () => {
    setOptionsData(true);
  }

  const handleKeyDown = (event) => {
    event.preventDefault(); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOptionsData(false);
    }
  };
useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
    return (
       
        <div className={className} ref={dropdownRef}>                      
            <TextInput
             type="text"             
             className="relative w-full"
             value={selectedOption?.name || ''}
             readOnly
             onClick={handleClick}
             
             onKeyDown={handleKeyDown}
             
            ></TextInput>
           {
            optionsData && (
              <div className="absolute top-12 bg-white w-full max-h-[180px] overflow-y-scroll shadow-md p-4 z-50 rounded-md">
              <ul className=" grid gap-[16px]">
                  {data.map((option, index) => (
                  <li key={index} className="flex items-center">
                      <input
                      className="border-gray-500"
                      type="radio" 
                      checked={selectedOption === option}
                      onChange={() => {handleOptionSelect(option); handleChange(option.code);}}
                      />
                      <div className="grid grid-cols-[1fr,3fr] items-center w-full">
                        <p className="pl-3 text-gray-500 w-full">{option.code}</p>
                        <p className="pl-3 text-gray-500 w-full border-l-2
border-black-600">{option.name}</p>
                      </div>
                  </li>
                  ))}
              </ul>
          </div>
            )
           }
          
    </div>
    );
}
