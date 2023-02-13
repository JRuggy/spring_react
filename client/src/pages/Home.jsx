import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://127.0.0.1:8080/api/v1/employees");
        setUsers(result.data);
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
                                    <th>User's ID</th>
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
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.emailId}</td>
                                            <td>
                                                <a href="http://" className='btn btn-info btn-sm oza'>View</a>
                                                <a href="http://" className='btn btn-success btn-sm oza'>Edit</a>
                                                <a href="http://" className='btn btn-danger btn-sm oza'>Delete</a>
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
