import React from 'react'
import Axios from "axios"
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import ReadParticularData from './ReadParticularData'

function ReadStudentData() 
{
    // Connect to Backend --> give you the output --> collect it --> display
    // connect to localhost:9000/read

   const [ completeReadData, setCompleteReadData ] = React.useState([])

    React.useEffect(function()
    {
        //Axios to make an api call to the server
        Axios.get("https://sms-backendd-863i.onrender.com/read").then(function(output)
        {
            setCompleteReadData(output.data)
        }).catch(function(error)
        {
            console.log(error)
        })
    })


  return (
    <div className='row'>
        <Outlet />
        <div className='col-md-6'>
            <table className="table table-light table-striped-columns table-hover">
            <thead>
                    <tr>
                    <th>STUDENT NAME</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                    </tr>
                </thead>
            <tbody>
                {
                completeReadData.map(function(i)
                {
                    return <tr>
                        <td>{i.name}</td>
                        <td><Link className='btn btn-outline-primary' to={`/students/${i.rollNo}`}>View</Link></td>
                        <td><Link className='btn btn-outline-success' to={`/students/edit/${i.rollNo}`}>Edit</Link></td>
                        <td><Link className='btn btn-outline-danger' to={`/students/delete/${i.rollNo}`}>Delete</Link></td>   
                    </tr>
                    
                })
            }
            
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default ReadStudentData