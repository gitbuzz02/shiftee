import { Link } from "react-router-dom";


function EmployeeManager() {
    return (
        <div className="">
            <div className="row">
                <button type="button" className="">Add Bulk</button>
                <button type="button" className="">Generate Reports</button>
                <button type="button" className="">Action</button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Full Name</th>
                            <th>Client Name</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1000001</td>
                            <td>Anderson, Austin</td>
                            <td>OWNER</td>
                            <td>OWNER</td>
                            <td>President</td>
                            <td>
                                <Link to="">View Details</Link>
                                <Link to="">Delete</Link>
                            </td>
                        </tr>
                    </thead>
                </table>

            </div>
        </div>
    );
}

export default EmployeeManager;