import React from 'react'
 var obj={
    x:44,
    y:"sana"
 }
 export const Example = () => {
   return (
     <div>
        <h1>{obj.x}</h1>
        <h2>{obj.y}</h2>
     </div>
   )
 }