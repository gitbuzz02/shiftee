import NavGroup from "./NavGroup";

interface SideNavProps {
    navItems: string[],
    onClickItem : (item : string) => void;
}

function SideNav({navItems, onClickItem}: SideNavProps) {
    return (
        <nav id="sideNav" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="position-sticky pt-3 sidbar-sticky">
                <img src="https://www.homesourced.com/wp-content/uploads/2021/02/logo.png" alt="Company Logo" className="pt-3 pb-3"/>
                <NavGroup items={navItems} onClickItem={onClickItem} />
            </div>
        </nav>
    );
}

export default SideNav;