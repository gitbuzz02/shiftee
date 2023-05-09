import { useState } from "react";
import SideNav  from "./../components/SideNav";
import MainPane from "./../components/MainPane";
import EmployeeManager from "../components/EmployeeManager";

function RootLayout() {
    const [currentView, setCurrentView] = useState('');
    const navItems = [
            'Manage Employee',
            'Manage Shifts',
            'View DTRs'
        ];

    var mainContent = {}; 
    
    function updateView(item : string) {
        setCurrentView(item);
        switch(item) {
            case "Manage Employee" : console.log("Load Manage Employee Pane");
                fetch('', {

                }).then(
                    response => response.json()
                ).then(data => {

                });
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
            <MainPane content={mainContent}/>
        </div>
    </div>
    );
}

export default RootLayout; 