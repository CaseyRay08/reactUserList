
import React, { useState } from 'react'
import './Components/Styles/Error.css'
import './Components/Styles/global.css'
import { DisplayList } from './Components/DisplayList'
import { UserForm } from './Components/UserForm'

const dummyEmployees = [

]


export const App = () => {
  const [user, setUser] = useState(dummyEmployees)

  const handleUser = (users) => {
    setUser(prev => [users, ...prev])

  }


  return (
    <div className='backdrop'>


      <div className='card'>
        <UserForm onUserData={handleUser}></UserForm>
      </div>

      <div className='card'>
        <DisplayList items={user} />
      </div>


    </div>
  )
}

