import React, { useState, useEffect, } from 'react'
import axios from 'axios'

const CreateUserComponent = () => {
    const [username, setUsername] = useState('')

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
        // setUsername('')
        window.location = '/'

    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <input type='text'
                        required
                        className='form-control'
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Create User' className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default CreateUserComponent
