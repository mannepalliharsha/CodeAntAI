import { useRecoilValue } from "recoil"
import { Addrepository } from "../state/atom"
export default function Repositorycomponent(){
    const arr=useRecoilValue(Addrepository);
      return(
        <div className='' >
            {arr.map(function(val){
                  return(
                    <div className='w-full h-max  ml-3 shadow-md relative mt-10'>
                    <div className='flex ' > 
                      <div className="ml-2" >
                        <h2 className='text-xl' >{val.title}</h2>
                      </div>
                      <div className=" ml-2 border rounded-md w-[60px] pl-1 text-blue-600" >
                          <h2>{val.type}</h2>
                        </div>
                      </div> 
                      <div className="flex mt-2">
                      <div className="ml-3" >
                      <h2>{val.techstack}</h2>
                      </div>
                       <div className='border h-[10px] w-[10px] mt-2 ml-2 rounded-full bg-blue-700' >
                        </div>
                        </div>
                    </div>
                  )
            })}
            </div>
      )
}