import sso from'../../public/sso.png';
export default function Heading({text,image,id}){
    console.log(image);
    console.log(id);
     return(
      <div>
      {id==="1" ?  <div className='flex mt-3 ml-2  ' >
      <div className='bg-center bg-cover h-[40px] w-[30px] ' style={{
                 backgroundImage : `url(${image})`
            }} ></div>
            <div className='ml-1' >
                <h1 className=' mt-2 text-xl ' >{text}</h1>
          </div>
        </div>  : 
    <div className='flex justify-center mt-3 ' >
    <div className='bg-center bg-cover h-[60px] w-[50px] ' style={{
               backgroundImage : `url(${image})`
          }} ></div>
          <div className='ml-1' >
              <h1 className='text-center mt-2 text-3xl ' >{text}</h1>
        </div>
      </div> 
        }
        </div>
    )
}