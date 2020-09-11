import React, { useState } from 'react'
import Section from './Section';

function Notebooks({ diaryName, diaryId }) {
    const [sectionOverlay, setSectionOverlay] = useState('false')

    const notebookClick = () => {
        setSectionOverlay(!sectionOverlay)
    }

    return (
        <div>
            <ul className="Notebook_Title">
                {<li onClick={notebookClick}>{diaryName}</li>}
            </ul>
            <div className={sectionOverlay ? "hidden" : "visible"}>
                <Section diaryId={diaryId} />
            </div>
        </div>
    )
}

export default Notebooks
