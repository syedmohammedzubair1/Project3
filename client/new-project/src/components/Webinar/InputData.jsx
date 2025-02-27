import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Webinar } from './Webinar'

export const InputData = () => {
    const [input,setInput]=useState("")
  return (
    <div>
        <Navbar setInput={setInput}/>
        <Webinar input={input}/>
    </div>
  )
}
