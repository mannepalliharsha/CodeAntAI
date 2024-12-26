import {useState} from 'react'
export default function Icon({image,text,color,onClick}){
     console.log(color);
      return(
     <div className={`flex mt-2 ml-2 border rounded-md h-[40px] w-[250px] pl-2 pr-2 pt-1 cursor-pointer ${color} `} onClick={onClick}  >
       <div className="bg-center bg-cover h-[30px] w-[30px] rounded-md " style={{
          backgroundImage : `url(${image})`
       }} >
          
       </div>
       <div className='ml-1' >
        <h2 className='text-xl' >{text}</h2>
       </div>
     </div>
      )
}