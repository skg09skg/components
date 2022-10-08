import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react';


const ArrayImages1 = () => {

    const MAX_COUNT = 5;

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileLimit, setFileLimit] = useState(false);

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === f.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    // limitExceeded == true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    }

    const handleFileEvent = (e) => {
        const choosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(choosenFiles);
        console.log(choosenFiles);
    }

    return (
        <div>
            <input id='fileUploaded' type='file' multiple accept='application/pdf, image/png' onChange={handleFileEvent} disabled={fileLimit} />
            <label htmlFor='fileUpload'>
                <a className={`btn btn-primary ${!fileLimit ? '' : 'disabled'}`}>Uplod Files</a>
            </label>

            <div className='uploaded-files-list'>
                {uploadedFiles.map(file => (
                    <div>
                        {file.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArrayImages1;