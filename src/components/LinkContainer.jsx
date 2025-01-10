import React, { useContext } from 'react'
import ListItem from './ListItem'
import LinkContext from '../context/LinkContext'

const LinkContainer = () => {
    
    const {links} = useContext(LinkContext)

return (
    <div  className="my-3 p-3 bg-slate-900 w-3/4 rounded-sm">
        {/* {
            links.map((link) =>{
            return <ListItem key = {link.id} link = {link} />
                
            })
        } */};
        {
            links.map((link) => (
                <ListItem link={link} key = {crypto.randomUUID}/>
            ))
        }
    </div>
    
)
}

export default LinkContainer;


// className="my-3 p-3 bg-slate-900 w-full rounded-sm"