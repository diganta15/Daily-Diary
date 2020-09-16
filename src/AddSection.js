import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import firebaseConfig from './firebase';
import firebase from 'firebase';
import { generatePushID } from './generateId';

function AddSection({diaryId, docId, diaryName, setAddSectionOverlay}) {
    const [section, setSection] = useState('');
    
    const addSection = ()=> {
        console.log(diaryId);

        firebaseConfig.firestore().collection('section').add(
            {
                diaryId: diaryId,
                title: section,
                
            }
        ).then(() => {
            setAddSectionOverlay(false)
            
        })
    }

    return (
        <div className="add_section">
            <input type="text" className="section_name" onChange={(e) => setSection(e.target.value)} placeholder="Enter Section Name"/>
            <div className="add_section-buttons">
                <Button variant="contained" color="primary" onClick={addSection}>Add</Button>
                <Button variant="contained" color="secondary" onClick={()=> setAddSectionOverlay(false)}>Cancel</Button>
            </div>
        </div>
    )
}

export default AddSection
