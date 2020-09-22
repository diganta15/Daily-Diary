import React,{useState,useEffect} from 'react'

import firebaseConfig from './firebase';
import firebase from 'firebase';
import CKEDITOR from './CKEDITOR'


function Editor({ setTitle, setEditorData, receivedData,selectedSection}) {
  const [data, setData] = useState([]);

  useEffect(() => {

    firebaseConfig
    .firestore()
    .collection('documents')
    .where('sectionId','==',selectedSection)
    .onSnapshot(snapshot =>{
        setData(snapshot.docs.map(doc => ({id:doc.id, text:doc.data()})))
    })
    

  }, [selectedSection])
    
  
    return (
        <div>
            {
                data.map(({ id, text }) => (
                    <div className="">
                        <CKEDITOR edd={text.editorData} setEditorData={setEditorData}/>

                    </div>
                ))
            }
           
            
        </div>
    )
}

export default Editor
