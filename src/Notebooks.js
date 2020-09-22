import React, { useState } from 'react'
import Section from './Section';
import { AiFillDelete} from 'react-icons/ai';
import { BiAddToQueue} from 'react-icons/bi';
import firebaseConfig from './firebase';
import AddSection from './AddSection'

function Notebooks({ diaryName, diaryId, docId, setSelectedSection }) {
    const [sectionOverlay, setSectionOverlay] = useState(true);
    const [selectedDiary, setSelectedDiary] = useState('');
    const [addSectionOverlay, setAddSectionOverlay] = useState(false);

    const addSection = () => {
        setAddSectionOverlay(!addSectionOverlay);
    }

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
                    <button className="add-notebook" onClick={addSection}><BiAddToQueue /></button>
                    <button className="delete-button" onClick={deleteNotebook}><AiFillDelete /></button>
                </div>
            </ul>
            {addSectionOverlay && <div>
                <AddSection diaryId={diaryId} docId={docId} diaryName={diaryName} setAddSectionOverlay={setAddSectionOverlay}/>
            </div>}
            <div className="section">
                <div className={sectionOverlay ? "hidden" : "visible"}>
                    <Section diaryId={diaryId} setSelectedSection={setSelectedSection}/>
                </div>
            </div>
        </div>
    )
}

export default Notebooks
