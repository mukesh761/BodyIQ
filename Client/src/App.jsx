import { useContext, useEffect } from 'react'

import Login from './components/pages/Login.jsx'
import SignUp from './components/pages/SignUp.jsx'
import Step1 from './components/forms/Step1.jsx'
import Step2 from './components/forms/Step2.jsx'
import Step3 from './components/forms/Step3.jsx'
import Step4 from './components/forms/Step4.jsx'
import Step5 from './components/forms/Step5.jsx'
import Step6 from './components/forms/Step6.jsx'
import { Routes, Route, redirect } from 'react-router-dom'
import { userContext } from './Context/userContext.jsx'
import Home from './components/pages/Home.jsx'
import { pageContext } from './Context/pageContext.jsx'
import { Navigate } from 'react-router-dom'

function App() {
  const {user, setuser, islogin, setislogin}=useContext(userContext)
  const {pages,setpages}=useContext(pageContext)
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedIsLogin = localStorage.getItem('islogin')
    
    if (storedUser) {
      try {
        setuser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Error parsing user from localStorage:', error)
        setuser(null)
      }
    }
    
    if (storedIsLogin === 'true') {
      setislogin(true)
    } else {
      setislogin(false)
    }
  }, [setuser, setislogin])

  return (
    <>
      <Routes>
        <Route path='/' element={islogin?user?.goal?<Home/>:<Step1/>:<Login/>} />
        <Route path='/signup' element={islogin?user?.goal?<Home/>:<Step1/>:<SignUp/>} />
        <Route path='/login' element={islogin?user?.goal?<Home/>:<Step1/>:<Login/>} />
        <Route path='/step1' element={user?.goal?<Home/>:<Step1/>} />
        <Route path='/step2' element={pages?.page1?<Step2/>:<Navigate to="/step1" />} />
        <Route path='/step3' element={pages?.page2?<Step3/>:<Navigate to="/step2" />} />
        <Route path='/step4' element={pages?.page3?<Step4/>:<Navigate to="/step3" />} />
        <Route path='/step5' element={pages?.page4?<Step5/>:<Navigate to="/step4" />} />
        <Route path='/step6' element={pages?.page5?<Step6/>:<Navigate to="/step5" />} />
      </Routes>
    </>
  )
}

export default App
