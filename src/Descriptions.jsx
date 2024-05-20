import React from 'react';

import {FaArrowUp, FaArrowDown, FaWind, FaMagic, FaAddressBook, FaAdjust} from "react-icons/fa";
import {BiHappy} from "react-icons/bi";
import {MdCompress , MdOutlineWaterDrop } from "react-icons/md";


const Descriptions = ( {weather, units} ) => {

  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';


  const cards = [
    
    {
      id : 4,
      icon : <MdCompress/>,
      title : "pressure",
      data : weather.pressure,
      unit : '"hPa',
    },
    {
      id : 5,
      icon : <MdOutlineWaterDrop/>,
      title : "humidity",
      data : weather.humidity,
      unit : "%",
    },
    {
      id : 6,
      icon : <FaWind/>,
      title : "wind speed",
      data : weather.speed.toFixed(),
      unit : windUnit,
    },
   
   
  ];

  


  return (
    // section section__description
    <div className=' md:grid md:grid-cols-3 gap-10 p-24  '>

      {cards.map( ( {id, icon, title, data, unit } ) => (
        // card 
         <div key={id} className=' flex flex-col items-center justify-between p-12 size-15 font-bold gap-2 w-80 text-3xl rounded-md bg-gradient-to-r from-pink-500 hover:to-yellow-500 ... '>
          {/* description__card-icon */}
         <div className=' w-[100%] flex flex-row items-center justify-center gap-2 mb-3 '>
             {icon}
             <small className='capitalize' >{title}</small>
         </div>
        <h2> {`${data} ${unit}`} </h2>
        </div>

      ) )}

    </div>
  );
};

export default Descriptions