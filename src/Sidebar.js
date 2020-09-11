import React,{useEffect, useState} from 'react';
import './Sidebar.css';
import firebaseConfig from './firebase';
import Notebooks from './Notebooks';





function Sidebar() {
const [diary, setDiary] = useState([]);
const [data, setData] = useState([])


    useEffect(() => {
        firebaseConfig.
        firestore()
        .collection('diary')
            .where('userId', '==', '12345')
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
                            <Notebooks diaryName={info.name} diaryId={info.diaryId} />
                            
                        </div>
                    ))
                }
           </div>
        </div>
    )
}

export default Sidebar;
