import React from "react";

const Header = (props) => {
    const handleClick = () => props.setIsLightMode(pM => !pM)

    return (
        <header>
        <h1>
            <span className="logo">{"//"}</span>
            Project Showcase
        </h1>
        <nav>
            <button onClick={handleClick}>{props.isLightMode ? 'Dark' : 'Light'} Mode</button>
        </nav>
        </header>
    );
}

export default Header;