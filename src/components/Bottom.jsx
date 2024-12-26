export default function Bottom({text,color,onClick}){
      console.log(color);
      return(
      
          <div className='border h-max w-[250px] text-2xl mb-2 rounded-md cursor-pointer t  ' onClick={onClick} >
             <h2 className= {`text-center ${color} p-3 rounded-md`} >{text}</h2>
          </div>
      )
}