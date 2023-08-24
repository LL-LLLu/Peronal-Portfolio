import React from 'react'
import { useEffect } from 'react';



const Button_fade = ({text, href, className}) => {

  return (
    <div class={`from-center Fade_btn ${className}`}>
        <a target="_blank" href={href}>{text}</a>
    </div>

  )
}
export default Button_fade