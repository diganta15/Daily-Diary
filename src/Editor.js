import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {
    return (
        <div>
            <CKEditor editor={ClassicEditor}  
                config={{
                    toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
                        'tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo']
                }} />
        </div>
    )
}

export default Editor
