import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


export default class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        // Your Values / Inputs
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdNameHandler = this.changeEmailIdNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        });
    }

    updateEmployee = (e) => {
        // const navigate = useNavigate();
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };

        // The line below is for testing if data are coming or not
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee).then(res => {
            this.props.history.push('/ListEmployeeComponent');
        });
    }

    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdNameHandler(event) {
        this.setState({ emailId: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>

                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.changeFirstNameHandler} className='form-control' type="text" />
                                    </div>

                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name='firstName' value={this.state.lastName} onChange={this.changeLastNameHandler} className='form-control' type="text" />
                                    </div>

                                    <div className='form-group'>
                                        <label>Email ID:</label>
                                        <input placeholder='Email ID' name='emailId' value={this.state.emailId} onChange={this.changeEmailIdNameHandler} className='form-control' type="text" />
                                    </div>

                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                    {/* <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
