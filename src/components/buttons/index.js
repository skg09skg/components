import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ButtonGroup from '@mui/material/ButtonGroup';


const Buttons = () => {
          const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

          const [open, setOpen] = React.useState(false);
          const anchorRef = React.useRef(null);
          const [selectedIndex, setSelectedIndex] = React.useState(1);

          const handleClick = () => {
                    console.info(`You clicked ${options[selectedIndex]}`);
          };

          const handleMenuItemClick = (event, index) => {
                    setSelectedIndex(index);
                    setOpen(false);
          };

          const handleToggle = () => {
                    setOpen((prevOpen) => !prevOpen);
          };

          const handleClose = (event) => {
                    if (anchorRef.current && anchorRef.current.contains(event.target)) {
                              return;
                    }

                    setOpen(false);
          };

          return (
                    <div>
                              <div className='container1'>
                                        <Stack spacing={2} direction="row">
                                                  <Button variant="text">Text</Button>
                                                  <Button variant="contained">Contained</Button>
                                                  <Button variant="outlined">Outlined</Button>
                                        </Stack>
                              </div>
                              <div className='container2'>
                                        <Stack direction="row" spacing={2}>
                                                  <Button>Primary</Button>
                                                  <Button disabled>Disabled</Button>
                                                  <Button href="#text-buttons">Link</Button>
                                        </Stack>
                              </div>
                              <div className='container3'>
                                        <Stack direction="row" spacing={2}>
                                                  <Button variant="outlined">Primary</Button>
                                                  <Button variant="outlined" disabled>
                                                            Disabled
                                                  </Button>
                                                  <Button variant="outlined" href="#outlined-buttons">
                                                            Link
                                                  </Button>
                                        </Stack>
                              </div>
                              <div className='container1'>
                                        <Stack direction="row" spacing={2}>
                                                  <Button color="secondary">Secondary</Button>
                                                  <Button variant="contained" color="success">
                                                            Success
                                                  </Button>
                                                  <Button variant="outlined" color="error">
                                                            Error
                                                  </Button>
                                        </Stack>
                              </div>
                              <div className='container2'>
                                        <Button variant="contained" component="label">
                                                  Upload
                                                  <input hidden accept="image/*" multiple type="file" />
                                        </Button>
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                                  <input hidden accept="image/*" type="file" />
                                                  <PhotoCamera />
                                        </IconButton>
                                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                                                  Delete
                                        </Button>
                                        <Button variant="contained" endIcon={<SendIcon />}>
                                                  Send
                                        </Button>
                                        <IconButton aria-label="delete">
                                                  <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" disabled color="primary">
                                                  <DeleteIcon />
                                        </IconButton>
                                        <IconButton color="secondary" aria-label="add an alarm">
                                                  <AlarmIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="add to shopping cart">
                                                  <AddShoppingCartIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="small">
                                                  <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="small">
                                                  <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large">
                                                  <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large">
                                                  <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        <LoadingButton loading variant="outlined">
                                                  Submit
                                        </LoadingButton>
                                        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                                                  Fetch data
                                        </LoadingButton>
                                        <LoadingButton
                                                  loading
                                                  loadingPosition="start"
                                                  startIcon={<SaveIcon />}
                                                  variant="outlined"
                                        >
                                                  Save
                                        </LoadingButton>
                              </div>
                              <div className='container1'>
                                        <React.Fragment>
                                                  <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                                                            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                                                            <Button
                                                                      size="small"
                                                                      aria-controls={open ? 'split-button-menu' : undefined}
                                                                      aria-expanded={open ? 'true' : undefined}
                                                                      aria-label="select merge strategy"
                                                                      aria-haspopup="menu"
                                                                      onClick={handleToggle}
                                                            >
                                                                      <ArrowDropDownIcon />
                                                            </Button>
                                                  </ButtonGroup>
                                                  <Popper
                                                            sx={{
                                                                      zIndex: 1,
                                                            }}
                                                            open={open}
                                                            anchorEl={anchorRef.current}
                                                            role={undefined}
                                                            transition
                                                            disablePortal
                                                  >
                                                            {({ TransitionProps, placement }) => (
                                                                      <Grow
                                                                                {...TransitionProps}
                                                                                style={{
                                                                                          transformOrigin:
                                                                                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                                                                }}
                                                                      >
                                                                                <Paper>
                                                                                          <ClickAwayListener onClickAway={handleClose}>
                                                                                                    <MenuList id="split-button-menu" autoFocusItem>
                                                                                                              {options.map((option, index) => (
                                                                                                                        <MenuItem
                                                                                                                                  key={option}
                                                                                                                                  disabled={index === 2}
                                                                                                                                  selected={index === selectedIndex}
                                                                                                                                  onClick={(event) => handleMenuItemClick(event, index)}
                                                                                                                        >
                                                                                                                                  {option}
                                                                                                                        </MenuItem>
                                                                                                              ))}
                                                                                                    </MenuList>
                                                                                          </ClickAwayListener>
                                                                                </Paper>
                                                                      </Grow>
                                                            )}
                                                  </Popper>
                                        </React.Fragment>
                              </div>
                    </div>
          )
}

export default Buttons;