import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CKEDITOR({setEditorData, edd,title, setDisplayTitle}) {
    console.log(edd)
    setDisplayTitle(title)
    return (
        <div>
            <CKEditor editor={ClassicEditor}

            data={edd} 
                config={{
                    toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', '|', 'undo', 'redo']
                }} onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }} />
        </div>
    )
}

export default CKEDITOR
