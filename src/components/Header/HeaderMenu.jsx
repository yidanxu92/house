import {useRef } from "react"
import "./headermenu.css"
import  {useDetectOutsideClick}  from "./useDetectOutsideClick";

export default function HeaderMenu({setSortType}) {
    const Menus = ['price', 'area'];
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);


    return (
        <div className="container">
            <div className="menu-container" ref={dropdownRef}>
                <button className="menu-trigger" onClick={onClick}>
                    <span>Sorting</span>
                </button>

                <div className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <ul>
                        {Menus.map((menu) => (
                            <li value={menu} onClick={(e) => setSortType(e.target.getAttribute('value'))}>{menu}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

