import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

const SnackBar = () => {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(true);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen1(false);
    };


    // next //

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}
            >
                Top-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >
                Top-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                })}
            >
                Bottom-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'center',
                })}
            >
                Bottom-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'left',
                })}
            >
                Bottom-Left
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'left',
                })}
            >
                Top-Left
            </Button>
        </React.Fragment>
    );

    return (
        <div>
            <div className='container1'>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button variant="outlined" onClick={handleClick1}>
                        Open success snackbar
                    </Button>
                    <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
                        <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                    <Alert severity="error">This is an error message!</Alert>
                    <Alert severity="warning">This is a warning message!</Alert>
                    <Alert severity="info">This is an information message!</Alert>
                    <Alert severity="success">This is a success message!</Alert>
                </Stack>
            </div>
            <div className='container1'>
                {buttons}
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </div>
        </div>
    )
}

export default SnackBar;