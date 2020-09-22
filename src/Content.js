import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import firebaseConfig from './firebase';
import firebase from 'firebase';



function Content({ selectedSection }) {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [save, setSave] = useState([]);
    const [editorData, setEditorData] = useState();
    const [receivedData, setReceivedData] = useState();
    const [dataId, setDataId] = useState('');

   

    const editHandler = () => {
        setEdit(!edit);
    }

    const editTitle = (e) => {
        setTitle(e.target.value)

    }
    const saveHandler = () => {
        
        console.log(selectedSection)
        setEdit(!edit)
        console.log(editorData);
        //eslint - disable - next - line


        try {
            firebaseConfig.firestore().collection('documents').doc(selectedSection).update(
                {
                    sectionId: selectedSection,
                    title: title,
                    editorData: editorData,
                }
            ).then(() => {
                alert('Updated');
                console.log(editorData)
                firebaseConfig
                    .firestore()
                    .collection('documents')
                    .where('sectionId', '==', selectedSection)
                    .onSnapshot(snapshot => {
                        setReceivedData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
                    })
            })
        }

        catch {
            firebaseConfig.firestore().collection('documents').doc(selectedSection).set(
                {
                    sectionId: selectedSection,
                    title: title,
                    editorData: editorData,
                    data: true,
                }
            ).then(() => {
                alert('Saved');

                firebaseConfig
                    .firestore()
                    .collection('documents')
                    .where('sectionId', '==', selectedSection)
                    .onSnapshot(snapshot => {
                        setReceivedData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))

                    })
            })

        }

    }


    console.log(receivedData)
    return (
        <div className="Content">
            {selectedSection &&
                <div className="">
                    {< div className="main-content">
                        {edit ?
                            <div className="content_edit">
                                <div className="title">
                                    <input onChange={editTitle} className="document_title" type="text" placeholder="Enter Document Heading" />
                                    <button onClick={saveHandler} className="save">Save</button>

                                </div>
                                <div className="editor">
                                    <Editor selectedSection={selectedSection} edit={edit} setEdit={setEdit} editorData={editorData} setEditorData={setEditorData} receivedData={receivedData} />
                                </div>
                            </div> : <div className="content_view">
                                <div className="title">
                                    <h1>{title}</h1>
                                </div>
                                <div className="edit">
                                    <button onClick={editHandler} className="edit_button">Edit</button>
                                </div>
                            </div>}
                    </div>}
                </div>}
        </div>
    )
}

export default Content
