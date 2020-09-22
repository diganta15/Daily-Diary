import React,{useState,useEffect} from 'react';
import firebaseConfig from './firebase';
import firebase from 'firebase';
import View from './View'

function MainContent({selectedSection}) {
    const [renderData, setRenderData] = useState([]);
    console.log(selectedSection)
    useEffect(() => {
        console.log(selectedSection)
        firebaseConfig
            .firestore()
            .collection('documents')
            .where('sectionId', '==', selectedSection)
            .onSnapshot(snapshot => {
                setRenderData(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data() })))
            })
        
    }, [selectedSection])

    return (
        <div>
            {
                
                    renderData.map(({ id, text }) => (
                        <div className="">
                            <View display={text.editorData} />

                        </div>
                    ))
                
            }
        </div>
    )
}

export default MainContent
