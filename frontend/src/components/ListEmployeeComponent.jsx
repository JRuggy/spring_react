import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
// import { Link } from "react-router-dom";
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // We are initializing an employee array to fetch employees
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);

    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/ListEmployeeComponent');
    }

    render() {
        return (
            <div className='container'>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <table className='table table-hover table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName} </td>
                                            <td> {employee.emailId} </td>
                                            <td>
                                                <a href="http://" className='btn btn-sm btn-success'>Register</a>
                                                <a href="http://" className='btn btn-sm btn-danger oza'>Delete</a>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
