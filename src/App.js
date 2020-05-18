import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarComponent from './components/NavbarComponent'
import ExerciseListComponent from './components/ExerciseListComponent'
import EditExerciseComponent from './components/EditExerciseComponent'
import CreateExerciseComponent from './components/CreateExerciseComponent'
import CreateUserComponent from './components/CreateUserComponent'
import DeleteComponent from './components/DeleteComponent'


function App() {
  return (
    <Router> 
      <div className='container'>
        <NavbarComponent />
        <br />
        <Route path='/' exact component={ExerciseListComponent} />
        <Route path='/edit/:id' exact component={EditExerciseComponent} />
        <Route path='/create' exact component={CreateExerciseComponent} />
        <Route path='/user' exact component={CreateUserComponent} />
        <Route path='/delete/:id' exact component={DeleteComponent} />

        </div>
    </Router>
  )
}

export default App
