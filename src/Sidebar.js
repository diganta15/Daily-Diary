import React,{useEffect, useState} from 'react';
import './Sidebar.css';
import firebaseConfig from './firebase';
import Notebooks from './Notebooks';
import AddNotebook from './AddNotebook' 





function Sidebar() {
const [diary, setDiary] = useState([]);
const [data, setData] = useState([])

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        firebaseConfig.
        firestore()
        .collection('diary')
            .where('userId', '==', userId)
        .onSnapshot(snapshot =>{
            setData(snapshot.docs.map(doc =>({id:doc.id, info:doc.data()})))
        })
        

       
    }, [])

console.log(data)
    return (
        <div className="Sidebar">
           <div className="Notebooks">
                {
                    data.map(({ id, info }) => (
                        <div className="">
                            <Notebooks diaryName={info.name} diaryId={info.diaryId} docId={id}    />
                            
                        </div>
                    ))
                }
                <AddNotebook />
           </div>
        </div>
    )
}

export default Sidebar;
