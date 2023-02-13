import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUsers] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })

    const { firstname, lastname, email } = user

    const onInputChange = (e) => {
        setUsers({ user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/employees", user)
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)} >

                        <div className='mb-3'>
                            <label htmlFor="First" className='form-label'>First Name</label>
                            <input onChange={(e) => onInputChange(e)} value={firstname} type={"text"} className="form-control" placeholder='Enter Your First Name' name='firstname' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>Last Name</label>
                            <input onChange={(e) => onInputChange(e)} value={lastname} type={"text"} className="form-control" placeholder='Enter Your Last Name' name='lastname' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>Email ID</label>
                            <input onChange={(e) => onInputChange(e)} value={email} type={"text"} className="form-control" placeholder='Enter Your Email ID ' name='email' />
                        </div>
                        <button type="submit" className='btn btn-sm btn-outline-primary oza'>Register</button>
                        <button type="submit" className='btn btn-sm btn-outline-danger oza'>Cancel</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

