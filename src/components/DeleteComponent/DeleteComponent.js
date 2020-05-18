import React, { useState, useEffect, } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const EditExerciseComponent = props => {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState()
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:5000/exercises/' + props.match.params.id)
            .then(response => {
                setUsername(response.data.username)
                setDescription(response.data.description)
                setDuration(response.data.duration)
                const date = new Date(response.data.date)
                setDate(date)
            })
            .catch((error) => {
                console.log(error);
            })

            axios.get('http://localhost:5000/users/')
                .then(response => {
                    if (response.data.length > 0) {
                        setUsers(response.data.map(user => user.username))
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetchData()
    }, [props.match.params.id])

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
        e.preventDefault()
        axios.delete('http://localhost:5000/exercises/' + props.match.params.id)
            .then(response => console.log(response.data))
            window.location = '/'
    }

    return (
        <div>
            <h3>Delete exercise </h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select
                        required
                        className='form-control'
                        value={username}
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
                    <input type='submit' value='Edit Delete' className='btn btn-danger' />
                </div>
            </form>
        </div>
    )
}

export default EditExerciseComponent
