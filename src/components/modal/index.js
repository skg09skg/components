import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

const ModalN = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        return (
            <React.Fragment>
                <Button onClick={handleOpen}>Open Child Modal</Button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 200 }}>
                        <h2 id="child-modal-title">Text in a child modal</h2>
                        <p id="child-modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button onClick={handleClose}>Close Child Modal</Button>
                    </Box>
                </Modal>
            </React.Fragment>
        );
    }


    // Popover //
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const openpop = Boolean(anchorEl);

    return (
        <div>
            <div className='container1'>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <div className='container2'>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Text in a modal</h2>
                        <p id="parent-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                        <ChildModal />
                    </Box>
                </Modal>
            </div>
            <div className='container3'>
                <Typography
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    Hover with a Popover.
                </Typography>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={openpop}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>I use Popover. I use Popover. I use Popover. I use Popover. I use Popover. I use Popover. I use Popover.</Typography>
                </Popover>
            </div>
            <div className='container1'>
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                                Open Popover
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                            </Popover>
                        </div>
                    )}
                </PopupState>
            </div>
        </div>
    )
}

export default ModalN;