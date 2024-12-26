import { createContext,useState } from "react"
export const Repo=createContext();
 export  function Adding({children}){
      const[repo,setRepo]=useState([{}]);
   function Repository(title,type,techstack,storage){
          const newone=[...repo];
          newone.push({
              "tilte" : title,
               "type" : type,
                "techstack": techstack,
                "storage" : storage,
                "time" : Date.now()
          })
          setRepo(newone);
    }
    <Repo.Provider value={
        {
          repo,
          Repository
     }
    }>{children}</Repo.Provider>
}
