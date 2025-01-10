import React, { useContext, useState } from 'react'
import { fetchURL } from '../context/LinkService'
import LinkContext from '../context/LinkContext'

const Form = () => {
  const {dispatch} = useContext(LinkContext)


  const [text , setText] = useState("")
  
  const handleSubmit = async (e) =>{
      e.preventDefault()
      
      //Fetch Short URL
      const shortURLData = await fetchURL(text)
      // console.log(shortURLData);

      //Set URL in state
      dispatch({
        type: "SHORT_URL",
        payload : {
          id : crypto.randomUUID(),
          originalURL : text,
          ...shortURLData
        }
      });


      setText("");
  }


  return (
    <>
      <h1 className="text-white font-black text-3xl md:text-5xl md:max-w-lg text-center max-w-sm">
        Shorten Your Big URL With Our Tool
      </h1>

      <form className="my-3 w-3/4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          className="p-4 rounded-l-md w-3/4 focus:outline-none"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="p-4 rounded-r-md w-1/4 bg-green-700 ">
          <p className="text-white font-extrabold tracking-wider"> Shorten</p>
        </button>
      </form>
    </>
  )
}

export default Form