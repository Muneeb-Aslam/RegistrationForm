import React from 'react'
import SignUp from './components/signup'
import SignIn from './components/signin'
import './App.css'

function App() {
  const [currentform ,setcurrentform]=React.useState("register")
  function toggleForm(FormSwitch){
    setcurrentform(FormSwitch)
  }
  return (    
    currentform==="register"? <SignUp onFormSwitch={toggleForm}/> : <SignIn onFormSwitch={toggleForm}/>
  )
}

export default App
