import {useState,useEffect} from 'react'
import { Addrepository, Loading } from '../state/atom';
import { useRecoilState } from 'recoil';
import { ImCross } from "react-icons/im";

export default function NewRepositories(){
    const[tech,setTech]=useState(["Java","Html","Css","Javascript","React","TypeScript","Node.js","Express.js","MongoDB","Python","C++"])
    const[title,setTitle]=useState("");
    const[type,setType]=useState("");
    const[stack,setStack]=useState("");
    const[data,setData]=useRecoilState(Addrepository);
    const[loading,setLoading]=useRecoilState(Loading);
    console.log(loading);
    useEffect(function(){
        const newone=[...data];
        let found=true;
        for(let i=0;i<newone.length;i++){
           if(newone[i].title==title){
              found=false
                newone[i]={
                    ...newone[i],
                    "type" : type,
                    "techstack" :stack
                }
                break;
           }
        }
        if(found){
        newone.push({
           "title" : title,
           "type" : type,
            "techstack":stack
        })
      }
        console.log(newone);
        setData(newone);
    },[stack])
    return(
      <div className='flex justify-between' >
        <div>
         <div>
            <h2 className='text-2xl' >Title :</h2>
            <input type="text" onChange={function(e){
                setTitle(e.target.value);
            }} className="border text-xl w-full mt-2 rounded-md p-2" placeholder={"Enter the Title"} />
         </div>
        <div>
        <h2 className='mt-2 text-2xl' >Type :</h2>
          <div className='flex ml-3 mt-2'  >
             <div className='rounded-full w-[25px] h-[25px] border mt-1 cursor-pointer' onClick={function(){
                 setType("public");
             }} ></div>
            <div className='ml-2'>
             <h2 className='text-xl'>Public</h2>
            </div>
         </div>
         <div className='flex ml-3 mt-2' >
         <div className='rounded-full w-[25px] h-[25px] border mt-1 cursor-pointer' onClick={function(){
              setType("private")
         }}  ></div>
            <div className='ml-2'>
             <h2 className='text-xl'>Private</h2>
            </div>
         </div>
       </div>
        <div className='mt-2' >
             <h2 className='text-2xl ' >Tech Stack:</h2>
             <div className='grid grid-cols-3 mt-2 cursor-pointer' >
             {tech.map(function(value){
                  return(
                     <div className='w-[100px] text-center h-[40px] border rounded-md mt-2' onClick={function(){
                           setStack(value)
                     }}  >
                        <h2 className='text-xl' >{value}</h2>
                     </div>
                  )
             })}
             </div>
            <div >
                  
            </div>
        </div>
        </div>
        <div className='cursor-pointer ' onClick={function(){
              setLoading(false);
        }} >
            <ImCross size={30}></ImCross>
        </div>
       </div>
    )
}