import{useEffect,useRef,useState} from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
import Heading from '../components/Heading'

export default function Signinpage(){
    const inputref=useRef();
    const [params]=useSearchParams();
    const[username,setUsername]=useState("");
    const[err,setErr]=useState(true);
    const navigate=useNavigate();
    useEffect(function(){
        console.log(inputref.current);
         if(inputref.current){
            inputref.current.focus();
         }
    },[])
      return (
        <div className='flex justify-center h-screen' >
        <div className='flex flex-col justify-center ' >
          <div className='h-[400px] w-[400px] border-[5px] rounded-md border-black ' >
          <Heading text={params.get(`name`)} image={params.get(`image`)} ></Heading>
              <h2 className='text-2xl mt-2 ml-2' >Email : </h2>
              <input type="text" onChange={function(e){
                   setUsername(e.target.value);
              }} className='p-2 border rounded-md text-2xl mt-2 ml-2 text-blue-400'  ref={inputref} placeholder="harsha@gmail.com" />
               <h2 className='text-2xl mt-2 ml-2' >Password :</h2>
               <input type='text' className='p-2 border rounded-md text-2xl mt-2 ml-2 text-blue-400  ' placeholder='pass'></input>
               <div className='mt-4 flex justify-center' >
                  <button  onClick={function(){
                      if(!username.includes("@gmail.com")){
                          setErr(false);
                          return ;
                      }
                      setErr(true);
                      navigate(`/Dashboard?name=`+username);
                  }} className='text-2xl p-2 border w-[100px] text-center  rounded-md bg-slate-500 hover:bg-slate-950 text-white' >Signin</button>
                </div>
                {err==false ?
                <div className='flex justify-center'>
                <div className='h-max w-max bg-red-400 border rounded-md mt-2' >
                    <h2 className=' pl-2 pr-2' >Enter the mail,in mail format</h2>
                </div>
                </div> : <div></div>}
          </div>
          </div>
              
         </div>
      )
}