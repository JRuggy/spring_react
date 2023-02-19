import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditUser() {

    let navigate = useNavigate();

    const { id } = useParams()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const { firstName, lastName, emailId } = user;

    const onInputChange = (e) => {
        // the 3 dots below means copy all the elements
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, []);

    const onSubmit = async (e) => {

        // prevents url from outputing values
        e.preventDefault();

        // This's for updating the contents
        await axios.put(`http://localhost:8080/api/v1/employees/${id}`, user);

        // This navigates back to home
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)} >

                        <div className='mb-3'>
                            <label htmlFor="First Name" className='form-label'>First Name</label>
                            <input onChange={(e) => onInputChange(e)} value={firstName} type={"text"} className="form-control" placeholder='Enter Your First Name' name='firstName' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Last Name" className='form-label'>Last Name</label>
                            <input onChange={(e) => onInputChange(e)} value={lastName} type={"text"} className="form-control" placeholder='Enter Your Last Name' name='lastName' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Email" className='form-label'>Email ID</label>
                            <input onChange={(e) => onInputChange(e)} value={emailId} type={"text"} className="form-control" placeholder='Enter Your Email ID ' name='emailId' />
                        </div>
                        <button type="submit" className='btn btn-sm btn-outline-primary oza'>Update</button>
                        <Link to="/" className="btn btn-sm btn-outline-danger oza">Cancel</Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

