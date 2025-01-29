import React from 'react'
import {Child} from './child';


function Parent(props){
    const message="Hi this is sana"
  return (
    <div>
        <h1>this is parent component</h1>
        <Child message={message}/>
    </div>
  )
}
export default Parent;

