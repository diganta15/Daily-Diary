import React from 'react';
import Sidebar from './Sidebar'
import './Home.css';
import Header from './Header'
import Content from './Content'

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Main_Content">
                <Sidebar />
                
                <Content />
            </div>
           
        </div>
    )
}

export default Home
