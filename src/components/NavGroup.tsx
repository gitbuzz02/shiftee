import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface NavProps {
    items: string[];
    onClickItem: (item: string) => void;
}

export default function NavGroup({items, onClickItem}: NavProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <Fragment>
            <ul className="list-group">
                {items.map((item,index) => 
                    <Link
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item" } 
                        to={item.toLowerCase().replace(' ','-')}
                        key={item.toLowerCase().replace(' ','-')} 
                        onClick={() => { setSelectedIndex(index); onClickItem(item); }}
                    >
                        {item}
                    </Link>
                    )}
            </ul>
        </Fragment>
    );
};