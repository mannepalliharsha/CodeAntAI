import { atom } from "recoil"
 export  const Addrepository=atom({
      key : "Addrepository",
      default :[{
         "title" : "",
         "type" : "",
         "techstack": ""
      }]
})
export const Loading=atom({
     key : "Loading",
     default :false
})
