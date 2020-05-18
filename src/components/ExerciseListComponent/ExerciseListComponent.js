import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={'/edit/' + props.exercise._id}>Edit</Link>
                |
                <Link to={'/delete/' + props.exercise._id}>Delete</Link>
            </td>
        </tr>
    )
}

const CreateExerciseComponent = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data)
            })
            .catch((error => {
                console.log(error)
            }))
    })

    const deleteExercise = id => {
        axios.delete('http://localhost:5000/exercies/' + id)
            .then((response) => console.log(response.data))
                setExercises(exercises.filter(el => el.id !== id))
                window.location = '/'
            .catch((error) => {
                console.log(error)
            })
    }

    const exerciseList = () => {
        return exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />;
        })
    }
    return (
        <div>
            <h3>Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}


export default CreateExerciseComponent