import React from 'react';
import './Header.css'
import firebaseConfig from './firebase';
function Header() {
    return (
        <div className="Header">
            <h1 className="Header_Text">Journal</h1>
            <button className="SignOut_Button" onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Header
