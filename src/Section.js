import React,{useEffect, useState} from 'react'
import firebaseConfig from './firebase';

function Section({diaryId}) {
    const [section, setSection] = useState([])

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
        <div>
            {
            section.map(({id, sec}) =>(
                <div>{sec.title}</div>
            ))
            }
        </div>
    )
}

export default Section
