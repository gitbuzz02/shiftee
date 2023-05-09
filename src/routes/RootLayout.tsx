import { useState } from "react";
import SideNav  from "./../components/SideNav";
import MainPane from "./../components/MainPane";
import EmployeeManager from "./../components/EmployeeManager";
import { Outlet } from "react-router-dom";

    function RootLayout() {
    const [currentView, setCurrentView] = useState('');
    const navItems = [
            'Manage Employees',
            'Manage Shifts',
            'View DTRs'
        ];

    var mainContent = {}; 
    
    function updateView(item : string) {
        setCurrentView(item);
        switch(item) {
            case "Manage Employee" : console.log("Load Manage Employee Pane");
                // fetch('', {

                // }).then(
                //     response => response.json()
                // ).then(data => {

                // });
                mainContent = <EmployeeManager/>;
                break;
            case "Manage Shifts" : console.log("Load Manage Shifts Pane");
                break;
            case "View DTRs" : console.log("Load View DTRs Pane");
                break;
            default: 
                break;
        }
    }

    

    return (
        <div className="container-fluid">
        <div className="row">
            <SideNav navItems={navItems} onClickItem={updateView}/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" className="align-text-bottom"></span>
                        This week
                    </button>
                </div>
            </div>
            {/* <div className=""> */}
            <Outlet />
            {/* </div> */}
            </main>
        </div>
    </div>
    );
}

export default RootLayout; 