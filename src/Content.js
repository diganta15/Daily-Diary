import React, { useState } from 'react';
import Editor from './Editor'


function Content() {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [ save, setSave] = useState(false)

    const editHandler = () => {
        setEdit(!edit);
    }

    const editTitle = (e) => {
        setTitle(e.target.value)

    }

    const saveHandler = () =>{
        setEdit(!edit)
    }

    return (
        <div className="Content">
            {edit ?
                <div className="content_edit">
                    <div className="title">
                        <input onChange={editTitle} className="document_title" type="text" placeholder="Enter Document Heading" />
                        <button onClick={saveHandler} className="save">Save</button>
                    </div>
                    <div className="editor">
                        <Editor />
                    </div>
                </div> : <div className="content_view">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="edit">
                        <button onClick={editHandler} className="edit_button">Edit</button>
                    </div>
                </div>}


        </div>
    )
}

export default Content
