import Bottom from "./Bottom"
import Button from "./Button"
import {useState} from 'react'
import sso from '../../public/sso.png'
import {Link} from 'react-router-dom'
import Signinpage from "../Pages/Signinpage"
import {useNavigate} from 'react-router-dom'
import Heading from './Heading'
export default function Signin(){
    const[saas,setSass]=useState("bg-[#1874ec]");
    const[host,selfHost]=useState();
   const navigate=useNavigate();
      return(
        <div className='flex justify-center h-screen'  >
        <div className='flex  flex-col justify-center  ' >
        <div >
          <div className='h-max w-[600px] rounded-md border' >
          <Heading text={"CodeAnt AI"} image={"https://bookface-images.s3.amazonaws.com/logos/83de75f793dbe37ebdabab0b1ea7a65b32c2432e.png"} ></Heading>
             <h2 className='text-center  mt-3 text-3xl font-bold' >Welcome to CodeAnt AI</h2>
              <div className='flex justify-center mt-4' >
              <Bottom text={"SAAS"} color={saas} onClick={function(){
                    setSass('bg-[#1874ec]')
                     selfHost("");
              }}  ></Bottom>
              <Bottom text={"Self Hosted"} color={host}  onClick={function(){
                     selfHost('bg-[#1874ec]')
                     setSass("")
              }} ></Bottom>
              </div>
          </div>
          {saas ?  
          <div className='h-max w-[600px] rounded-md border' >
              <Button onClick={
                function(){
                  navigate(`/signin?image=https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png&name=Github`)
                }
              }  text={'Sign in with Github'} image={"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"} ></Button>
              <Button onClick={
                function(){
                  navigate(`/signin?image=https://tse1.mm.bing.net/th?id=OIP.6zUQVWZ_Oy-z6b7VNknMqAHaHa&pid=Api&P=0&h=180&name=Bitbucket`)
                }
              } text={'Sign in with Bitbucket'} image={"https://tse1.mm.bing.net/th?id=OIP.6zUQVWZ_Oy-z6b7VNknMqAHaHa&pid=Api&P=0&h=180"} ></Button>
              <Button onClick={
                function(){
                  navigate(`/signin?image=https://logowik.com/content/uploads/images/azure-devops1866.jpg&name=AzureDevops`)
                }
              } text={'Sign in with Azure Deveops'} image={"https://logowik.com/content/uploads/images/azure-devops1866.jpg"}  ></Button>
              <Button onClick={
                function(){
                  navigate(`/signin?image=https://tse1.mm.bing.net/th?id=OIP.2N2fOjoSdTVvnhQosUTpnwHaG2&pid=Api&P=0&h=180&name=GitLab`)
                }
              } text={'Sign in with  GitLab'} image={"https://tse1.mm.bing.net/th?id=OIP.2N2fOjoSdTVvnhQosUTpnwHaG2&pid=Api&P=0&h=180"} ></Button> 
              </div>
              :<div className='h-max w-[600px] rounded-md border'  >
                   <Button onClick={
                function(){
                  navigate(`/signin?image=https://tse1.mm.bing.net/th?id=OIP.2N2fOjoSdTVvnhQosUTpnwHaG2&pid=Api&P=0&h=180&name=SelfHostedGitLab`)
                }
              }   text={'Self Hosted GitLab'} image={"https://tse1.mm.bing.net/th?id=OIP.2N2fOjoSdTVvnhQosUTpnwHaG2&pid=Api&P=0&h=180"} ></Button> 
                   <Button onClick={
                function(){
                  navigate(`/signin?image=${sso}&name=SelfHostedSSO`)
                }
              }     text={'Sign in with SSO'} image={`${sso}`} ></Button>
                 </div> }
               <div className='text-center mt-4' >
                  <span className='text-xl' >By signing up you agree to</span>
                  <span className="ml-1 font-bold text-xl" >Policy Privacy</span>
                </div>  
        </div>
        </div>
        </div>
      )
}