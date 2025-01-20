import React from "react";

export default function Navbar(){
    return (
      <div className="header">
        <div className="header__logo">
        <h1>Liberty Firearms</h1>
        </div>
        <ul className="header__nav">
          <li>Home</li>
          <li>Weapons</li>
          <li>Attachments</li>
          <li>Armory</li>
        </ul>
      </div>
    );
}