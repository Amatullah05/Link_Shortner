import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import LinkContext from '../context/LinkContext';

const ListItem = ({link}) => {
  
  const {dispatch} = useContext(LinkContext)

  const removeLink = (id) =>{
      dispatch({
        type : "DELETE_URL",
        payload : id,
      })
  }


  return (
    <div className="relative border rounded-md p-3 flex items-center justify-between my-2 bg-white h-auto text-pretty truncate text-ellipsis z-0">
      <div>
      <a href= {link.data} target="_blank" className="text-blue-900 text-xl font-bold">
        {link.data}
      </a>
      <p className=' text-md my-1 text-gray-600 text-balance'>{link.originalURL}</p>
      </div>

      <button className=' absolute right-1 top-1' onClick={() => removeLink(link.id)}>
      <MdDelete className='text-[27px] text-red-600 hover:text-red-800'/>
      </button>
    </div>
  )
}

export default ListItem;
