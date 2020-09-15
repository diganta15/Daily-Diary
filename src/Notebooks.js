import React, { useState } from 'react'
import Section from './Section';
import { AiFillDelete} from 'react-icons/ai';
import { BiAddToQueue} from 'react-icons/bi';
import firebaseConfig from './firebase';

function Notebooks({ diaryName, diaryId, docId }) {
    const [sectionOverlay, setSectionOverlay] = useState('false');
    const [selectedDiary, setSelectedDiary] = useState('');

    
    const notebookClick = () => {
        setSectionOverlay(!sectionOverlay);
        setSelectedDiary(diaryId);
      
    }
    const deleteNotebook = () => {
        firebaseConfig
            .firestore()
            .collection('diary')
            .doc(docId)
            .delete()
            .then(()=>{setSelectedDiary('')})
            
        
    }

    return (
        <div>
            <ul className="Notebook_Title">
                {<li onClick={notebookClick}>{diaryName}</li>}
                <div className="notebook_buttons">
                    <button className="add-notebook"><BiAddToQueue /></button>
                    <button className="delete-button" onClick={deleteNotebook}><AiFillDelete /></button>
                </div>
            </ul>
            <div className={sectionOverlay ? "hidden" : "visible"}>
                <Section diaryId={diaryId} />
            </div>
        </div>
    )
}

export default Notebooks
