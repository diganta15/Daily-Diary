import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import firebaseConfig from './firebase';
import firebase from 'firebase'
import { generatePushID} from './generateId';

function AddNotebook() {
    const [modalOverlay, setModalOverlay] = useState(false);
    const[notebookName, setNotebookName] = useState('');
    const notebook_id = generatePushID();
    const addNoteboks = () =>{
        // console.log(notebookName);
        
        const userId = localStorage.getItem("userId");
        console.log(notebook_id);
        console.log(userId);
        firebaseConfig.firestore().collection('diary').add(
            {diaryId:notebook_id,
                name:notebookName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                userId:userId,
            }
        ).then(()=>{
            setNotebookName([]);
            setModalOverlay(!modalOverlay)
        })
    }
    return (
        <div className="Add_notebook">
            <div className="add_button" onClick={()=>{setModalOverlay(true)}}>
                <p>Add Notebook +</p>
            </div>
            {modalOverlay ? <div className="modal_overlay">
                <input className="notebook_nameInput" name="notebook_name" value={notebookName} onChange={(e)=>setNotebookName(e.target.value)} placeholder="Enter Notebook Name" type="text" />
                <div className="notebook_overlayButtons">
                    <Button variant="contained" color="primary" onClick={addNoteboks}>Add</Button>
                    <Button variant="contained" color="secondary" onClick={()=>{setModalOverlay(false)}}>Cancel</Button>
                </div>
            </div> : <p></p>}
        </div>
    )
}

export default AddNotebook
