import React, { useState } from 'react'
import './Styles/Form.css'
import './Styles/Button.css'
export const UserForm = (props) => {

    const [user, setUser] = useState('')
    const [age, setAge] = useState('')

    const handleUserName = e => {
        setUser(e.target.value)
    }
    const handleUserAge = e => {
        setAge(e.target.value)
    }


    const handleForm = e => {
        e.preventDefault()
        const formData = {
            username: user,
            age: +age,
            id: Math.floor(Math.random() * Date.now()).toString()
        }

        props.onUserData(formData)
        setUser('')
        setAge('')
    }





    return (
        <div className='' onSubmit={handleForm}>
            <form className='input'>
                <label><h2>UserName:</h2> </label>
                <input type='text' onChange={handleUserName} value={user} required />
                <label><h2>Age (Years)</h2> </label>
                <input type='number' onChange={handleUserAge} value={age} required />
                <button type='submit' className='button' >Add User</button>
            </form>
        </div>
    )
}
