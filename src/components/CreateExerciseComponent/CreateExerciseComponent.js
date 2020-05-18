import React, { useState, useEffect,  } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const CreateExerciseComponent = props => {
    // const [formValues, setFormValues] = useState({
    //     username: '',
    //     description: '',
    //     duration: 0,
    //     date: new Date(),
    //     users: [],
    //   })  

    //   const { username, description, duration, date, users } = formValues
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState()
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    useEffect(() => {    
        const fetchData = () => {
            axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username))
                    setUsername(response.data[0].username)
            }
          })
          .catch((error) => {
            console.log(error);
        })
        }
        // setTimeout(fetchData, 4000);
        fetchData()
      }, [])

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }

    const onChangeDate = (date) => {
        setDate(date)
    }

    const onSubmit = (e) => {
        console.log(e)
        e.preventDefault()

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(response => console.log(response.data))
            .catch((error) => {
                console.log(error)
            })
        window.location = '/'
    }

    return (
        <div>
            <h3> New exercise</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select
                        required
                        className="form-control"
                        value={users}
                        onChange={onChangeUsername}>
                        {
                            users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input type='text'
                        required
                        className='form-control'
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className='form-group'>
                    <label>Duration (in minutes): </label>
                    <input
                        type='text'
                        className='form-control'
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className='form-group'>
                    <input type='submit' value='Create Exercise Log' className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}

export default CreateExerciseComponent
