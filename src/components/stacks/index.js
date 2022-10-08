import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Stacks = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <div className='container1'>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </div>
            <div className='container2'>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </div>
        </div>
    )
}

export default Stacks;