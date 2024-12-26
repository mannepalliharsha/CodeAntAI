import { FiRefreshCw } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import refresh from '../../public/refresh.png'
import plus from '../../public/plus.png'
import Icon from "../components/Icon";
import {useState} from 'react'
import {useRef,useEffect} from 'react'
import NewRepositories from "./NewRepositories";
import Repositorycomponent from "../components/Repositorycomponent";
import { Addrepository } from "../state/atom";
import { ImCross } from "react-icons/im";
import { Loading } from "../state/atom";
import { useRecoilState } from "recoil";
export default function Repositories(){
    const inputref=useRef();
    const[loading,setLoading]=useRecoilState(Loading);
    console.log(loading);
    const[check,setCheck]=useState(false);
    const[arr,setArr]=useState(Addrepository);
    console.log(arr);
    useEffect(function(){
        if(inputref.current){
              inputref.current.focus();
        }
    },[])
    //  useEffect(function(){
    //    console.log('hello')
    //       if(arr.length>0 && arr[arr.length-1]?.title!=""){
    //           setCheck(true);
    //       }
    //       else{
    //          setCheck(false);
    //       }
    //  },[arr]);
     console.log('check'+check);
      return(
        <div className='w-full' >
         <div className='w-full h-[200px]  ml-3 shadow-md  relative  ' >
           <div className='flex justify-between mr-4' >
              <div className='mt-3 ml-2' >
                 <h2 className='text-2xl font-bold' >Repositories</h2>
              </div>
              <div className="flex"  >
               <Icon text={"Refresh All"} image={`${refresh}`} color={'bg-white'} ></Icon>
               <Icon onClick={function(){
                     setLoading(true)
               }}  text={"Add Repositories"} image={`${plus}`} color={'bg-white'} ></Icon>
              </div>
              </div>
              <div className="mt-10 mb-2 ml-2" >
                  <input type="text" className='border rounded-md p-2 w-[300px] text-2xl' ref={inputref} placeholder="search Repositories" />
              </div>
              {loading===true ? 
              <div className='fixed inset-0 flex justify-center items-center transition ease-linear duration-300  bg-black bg-opacity-50  ' >
              <div className=" bg-white rounded-lg shadow-lg p-6 w-[400px] " > 
                    <NewRepositories></NewRepositories>
                </div>
                </div> : ""}
              </div>
                  <Repositorycomponent></Repositorycomponent> 
              </div>
            
      )
}