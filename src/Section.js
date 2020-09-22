import React,{useEffect, useState} from 'react'
import firebaseConfig from './firebase';
import { RiDeleteBin2Fill } from 'react-icons/ri'

function Section({ diaryId, setSelectedSection}) {
    const [section, setSection] = useState([]);
    

    
    useEffect(() => {
        firebaseConfig.
            firestore()
            .collection('section')
            .where('diaryId', '==', diaryId)
            .onSnapshot(snapshot => {
                setSection(snapshot.docs.map(doc => ({ id: doc.id, sec: doc.data() })))
            })
    }, [])

    

    return (
        <div className="section-li">
            {
            section.map(({id, sec}) =>(
                <ul>
                    <li onClick={() => {setSelectedSection(sec.id);console.log(sec.id)}}>{sec.title}</li>
                    <li className="delete-section" onClick={()=>{
                        firebaseConfig
                            .firestore()
                            .collection('section')
                            .doc(id)
                            .delete()
                            .then(() => { setSelectedSection('') })
                    }}><RiDeleteBin2Fill /></li>
                </ul>
            ))
            }
            
        </div>
    )
}

export default Section
