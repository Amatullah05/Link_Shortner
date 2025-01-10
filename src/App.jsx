import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import LinkContainer from './components/LinkContainer'
import { LinkProvider } from './context/LinkContext'

const App = () => {
  return (
   
    <LinkProvider>
    <Navbar/>
      <div className="py-48 min-h-screen bg-slate-900 flex flex-col space-y-10 items-center justify-center">
      <Form/>
      <LinkContainer/>
      </div>
    </LinkProvider>
   
  )
}

export default App;