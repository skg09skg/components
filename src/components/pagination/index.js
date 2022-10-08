import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationN = () => {
    return (
        <div className='container1'>
            <Stack spacing={2}>
                <Pagination count={100} showFirstButton showLastButton />
                <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
        </div>
    )
}

export default PaginationN;