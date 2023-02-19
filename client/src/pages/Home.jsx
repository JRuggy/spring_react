import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([]);

    // eslint-disable-next-line
    const { id } = useParams()

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://127.0.0.1:8080/api/v1/employees");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <div className='container'>
                    <h2 className='text-center'>Users List</h2>
                    <div className='row'>
                        <table className='table table-hover table-stripped table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr>
                                            {/* The index + 1 is for increamenting numbers */}
                                            <th key={index}>{index + 1}</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.emailId}</td>
                                            <td>
                                                <a href="http://" className='btn btn-info btn-sm oza'>View</a>
                                                <Link to={`/edituser/${user.id}`} className="btn btn-primary btn-sm oza">Edit</Link>
                                                <button className='btn btn-danger btn-sm oza' onClick={() => deleteUser(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
