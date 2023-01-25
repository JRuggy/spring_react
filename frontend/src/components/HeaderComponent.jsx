import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <li>
                        <Link to="" className="dodo active">Home Page</Link> <br />
                    </li>
                    <li>
                        <Link to="/AddEmployee" className="btn btn-success btn-sm">Add Employee</Link>
                    </li>
                    {/* <li>
                        <Link to="/kaka" className="dada">Kaka Page</Link>
                    </li>
                    <li>
                        <Link to="/mama" className="dada">Mama Page</Link>
                    </li> */}
                    <li>
                        <Link to="/ListEmployeeComponent" className="dada btn btn-sm btn-success">List Employee</Link>
                    </li>
                    {/* <li>
                        <Link to="/UpdateEmployeeComponent" className="dada">Update</Link>
                    </li> */}
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;

