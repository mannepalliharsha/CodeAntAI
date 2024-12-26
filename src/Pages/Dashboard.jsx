import Heading from '../components/Heading'
import { useSearchParams } from 'react-router-dom'
import { TiArrowSortedDown } from "react-icons/ti";
import home from '../../public/home.png'
import arrow from '../../public/arrow.png'
import cloud from '../../public/cloud.png'
import document from '../../public/document.png'
import settings from '../../public/settings.png'
import logout from '../../public/logout.png'
import support from '../../public/support.png'
import Icon from '../components/Icon'
import {useState} from 'react'
import Repositories from './Repositories';
export default function Dashboard(){
    const[params]=useSearchParams();
    const[loading,setLoading]=useState(false);
    const[arr,setArr]=useState([
        {
           "text" : "Add to Repositories",
            "image" :`${home}`,
            "color" : "bg-white"
        },
        {
            "text" : "Ai Code Review",
             "image" :`${arrow}`,
             "color" : "bg-white"
         },
         {
            "text" : "Cloud Security",
             "image" :`${cloud}`,
             "color" : "bg-white"
         },
         {
            "text" : "How to Use",
             "image" :`${document}`,
             "color" : "bg-white"
         },
         {
            "text" : "Settings",
             "image" :`${settings}`,
             "color" : "bg-white"
         },
        
    ])
    function handleclick(id){
         if(id==0){
             setLoading(true);
         }
         else{
            setLoading(false);
         }
        console.log('id'+id);
           const newone=[...arr];
           for(let i=0;i<newone.length;i++){
                 if(id==i){
                      newone[i].color="bg-blue-600"
                 }
                 else{
                    newone[i].color='bg-white'
                 }
           }
           setArr(newone);
    }
      return(
        <div className='flex'  >
        <div className='h-screen w-[300px] border ml-2 rounded-md'   >
            <Heading id={"1"} text={"CodeAnt AI"} image={"https://bookface-images.s3.amazonaws.com/logos/83de75f793dbe37ebdabab0b1ea7a65b32c2432e.png"}></Heading>
      <div className='flex justify-between border rounded-md h-[40px] w-[250px] ml-2 mt-2 pt-1 '  >
            <div>
                <h2 className='text-xl pl-1 pr-1' >{params.get('name')}</h2>
            </div>
            <div className='mt-1 cursor-pointer' >
                <TiArrowSortedDown size={30} color={'black'}></TiArrowSortedDown>
            </div>
      </div>
      <div >
          {arr.map(function(val,id){
            console.log(id);
               return(
               <Icon text={val.text} image={val.image} color={val.color} onClick={ function(){
                handleclick(id)
            }}  ></Icon>
               )
          })}
     </div>
        </div>
         {loading ? <Repositories></Repositories> : <div></div>}
        </div>
      )
}