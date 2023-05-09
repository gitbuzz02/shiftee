import { Link } from "react-router-dom";


function EmployeeManager() {
    return (
        <div className="">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <button type="button" className="w-25 btn btn-success">Add Bulk</button>
                    <button type="button" className="w-25 btn btn-primary">Generate Reports</button>
                    <button type="button" className="w-25 btn btn-dark">Action</button>
                </div>
                <div className="col-1"></div>
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
                            <th className="text-center">Actions</th>
                        </tr>
                        <tr>
                            <td>1000001</td>
                            <td>Anderson, Austin</td>
                            <td>OWNER</td>
                            <td>OWNER</td>
                            <td>President</td>
                            <td className="d-flex justify-content-evenly flex-wrap">
                                <Link to="" className="btn btn-info">View Details</Link>
                                <Link to="" className="btn btn-warning">Delete</Link>
                            </td>
                        </tr>
                    </thead>
                </table>

            </div>
        </div>
    );
}

export default EmployeeManager;