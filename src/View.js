import React from 'react'

function View({display}) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: display }} />
        </div>
    )
}

export default View
