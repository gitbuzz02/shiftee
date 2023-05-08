import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListProps {
    items: string[];
    heading: string;
    onClickItem: (item: string) => void;
}

function ListGroup({items, heading, onClickItem}: ListProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <Fragment>
            { heading !== "" && <h1>{heading}</h1>}
            {items.length === 0 && <p>No items found.</p> }
            <ul className="list-group">
                {items.map((item,index) => 
                    // <li className="list-group-item" key={item} onClick={() => console.log(item+" got clicked.")}>{item}</li>
                    <li 
                        className={selectedIndex === index ? " list-group-item active" : " list-group-item" } 
                        key={item} 
                        onClick={() => { setSelectedIndex(index); onClickItem(item); }}
                    >
                        {item}
                    </li>
                    )}
            </ul>
        </Fragment>
    );
}

export default ListGroup;