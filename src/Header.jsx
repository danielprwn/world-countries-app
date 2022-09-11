import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Header({onClick, darkMode}) {
  return (
    <div className={`header ${darkMode ? "darkMode" : ""}`}>
        <div className="header_container">
                <h2 className="logo">WORLD COUNTRIES!</h2>
            <div className="switch_mode" onClick={onClick}>
                <Brightness4Icon />
            <h3>DARK</h3>
            </div>
        </div>
    </div>
  )
}

export default Header