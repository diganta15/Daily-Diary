import React,{useState} from 'react';
import Sidebar from './Sidebar'
import './Home.css';
import Header from './Header'
import Content from './Content'

function Home() {
    const [selectedSection, setSelectedSection] = useState('');
    
    return (
        <div className="Home">
            <Header />
            <div className="Main_Content">
                <Sidebar setSelectedSection={setSelectedSection} />
                
                <Content selectedSection={selectedSection} />
            </div>
           
        </div>
    )
}

export default Home
