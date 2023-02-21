import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Toast from 'react-bootstrap/Toast';


export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUsers] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const { firstName, lastName, emailId } = user;

    const onInputChange = (e) => {
        // the 3 dots below means copy all the elements
        setUsers({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {

        // prevents url from outputing values
        e.preventDefault();

        const respose = await axios.post("http://localhost:8080/api/v1/employees", user);
        console.log(respose.data.message);

        // <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        //     <div class="toast-header">
        //             <strong class="mr-auto"></strong>
        //             <small>11 mins ago</small>
        //             <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        //                 <span aria-hidden="true">&times;</span>
        //             </button>
        //     </div>
        //     <div class="toast-body">
        //         Hello, world! This is a toast message.
        //     </div>
        // </div>

        // This navigates back to home
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>

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
                        <button type="submit" className='btn btn-sm btn-outline-primary oza'>Register</button>
                        <Link to="/" className="btn btn-sm btn-outline-danger oza">Cancel</Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

