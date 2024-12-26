export default function Button({text,image,onClick}){
     console.log(image);
      return(
        <div className='flex justify-center mt-4 mb-4 cursor-pointer' onClick={onClick} >
        <div className='flex justify-center h-[50px] w-[400px] border pt-2  rounded-md' >
             <div className='bg-center bg-cover h-[30px] w-[40px]  ' style={{
                  backgroundImage : `url(${image})`
             }} > 
             </div>
             <div className='ml-2' >
                 <h2 className='text-xl' >{text}</h2>
             </div>
        </div>
        </div>
      )
}