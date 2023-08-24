import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'


function TextWriter(text_color) {

    const [text] = useTypewriter(
    {
        words: ['a Developer', 'a Designer', 'a Creator', "Lu Qi"],
        loop: 1,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 800,
    });


  return (
    <div className = "w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden mb-10">
        <h1 className="mt-10 mb-10 text-5xl">Hi, I am {" "}
            <span style = {{fontWeight: 'bold', color: 'black', color: `${text_color}`}}> 
                {text}
            </span>
            <span style = {{color: 'black', color: `${text_color}`}}>
                    <Cursor cursorStyle = '|'/>
            </span>
        </h1>
    </div>
  )

}


export default TextWriter

