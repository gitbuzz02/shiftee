import {useState, useEffect} from 'react';

import ListGroup from "./components/ListGroup";

function App() {
    const [currentView, setCurrentView] = useState('');
 

    function updateView(item : string) {
        setCurrentView(item);
        switch(item) {
            case "Manage Employee" : console.log("Load Manage Employee Pane");
                fetch('', {

                }).then(
                    response => response.json()
                ).then(data => {

                });
                break;
            case "Manage Shifts" : console.log("Load Manage Shifts Pane");
                break;
            case "View DTRs" : console.log("Load View DTRs Pane");
                break;
            default: 
                break;
        }
    }

    const navItems = [
        'Manage Employee',
        'Manage Shifts',
        'View DTRs'
      ];
    // const navLinks =

    return <div className="container-fluid">
                <div className="row">
                    <nav id="sideNav" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                        <div className="position-sticky pt-3 sidbar-sticky">
                            <img src="https://www.homesourced.com/wp-content/uploads/2021/02/logo.png" alt="Company Logo" className="pt-3 pb-3"/>
                            <ListGroup items={navItems} heading="" onClickItem={updateView} />
                        </div>
                    </nav>
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
                        <div className="bg-secondary">
                            <span id="testArea"></span>
                        </div>
                    </main>
                </div>
            </div>;
}

export default App;