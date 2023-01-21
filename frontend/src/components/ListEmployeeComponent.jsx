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

    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({ employees: res.data });
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <table className='table table-hover table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.first_name} </td>
                                            <td> {employee.last_name} </td>
                                            <td> {employee.email_id} </td>
                                        </tr>
                                )
                            }
                            <tr>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                            </tr>

                            <tr>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                            </tr>

                            <tr>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                                <td>Jaston Ruggy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
