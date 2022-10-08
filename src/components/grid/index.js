import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const GridN = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className='container1 bg'>
            <Box sx={{ width: '100%' }}>
                <Grid container
                spacing={{ xs: 2, md: 3 }}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>4</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>5</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>6</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>7</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>8</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>9</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>10</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>11</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>12</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default GridN;