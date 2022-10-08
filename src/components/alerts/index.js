import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const AlertsN = () => {

          const [open, setOpen] = React.useState(true);
          const [open1, setOpen1] = React.useState(true);
          const [open2, setOpen2] = React.useState(true);
          const [open3, setOpen3] = React.useState(true);

          return (
                    <div className='container1'>
                              <Stack sx={{ width: '100%' }} spacing={2}>
                                        <Collapse in={open}>
                                                  <Alert severity="error" action={
                                                            <IconButton
                                                                      aria-label="close"
                                                                      color="inherit"
                                                                      size="small"
                                                                      onClick={() => {
                                                                                setOpen(false);
                                                                      }}
                                                            >
                                                                      <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                  }>
                                                            <AlertTitle>Error</AlertTitle>
                                                            This is an error alert — <strong>check it out!</strong>
                                                  </Alert>
                                        </Collapse>
                                        <Button
                                                  disabled={open}
                                                  variant="outlined"
                                                  onClick={() => {
                                                            setOpen(true);
                                                  }}
                                        >
                                                  Re-open
                                        </Button>
                                        <Collapse in={open1}>
                                                  <Alert severity="warning" action={
                                                            <IconButton
                                                                      aria-label="close"
                                                                      color="inherit"
                                                                      size="small"
                                                                      onClick={() => {
                                                                                setOpen1(false);
                                                                      }}
                                                            >
                                                                      <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                  }>
                                                            <AlertTitle>Warning</AlertTitle>
                                                            This is a warning alert — <strong>check it out!</strong>
                                                  </Alert>
                                        </Collapse>
                                        <Button
                                                  disabled={open1}
                                                  variant="outlined"
                                                  onClick={() => {
                                                            setOpen1(true);
                                                  }}
                                        >
                                                  Re-open
                                        </Button>
                                        <Collapse in={open2}>
                                                  <Alert variant="filled" severity="info" action={
                                                            <IconButton
                                                                      aria-label="close"
                                                                      color="inherit"
                                                                      size="small"
                                                                      onClick={() => {
                                                                                setOpen2(false);
                                                                      }}
                                                            >
                                                                      <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                  }>
                                                            <AlertTitle>Info</AlertTitle>
                                                            This is an info alert — <strong>check it out!</strong>
                                                  </Alert>
                                        </Collapse>
                                        <Button
                                                  disabled={open2}
                                                  variant="outlined"
                                                  onClick={() => {
                                                            setOpen2(true);
                                                  }}
                                        >
                                                  Re-open
                                        </Button>
                                        <Collapse in={open3}>
                                                  <Alert severity="success" action={
                                                            <IconButton
                                                                      aria-label="close"
                                                                      color="inherit"
                                                                      size="small"
                                                                      onClick={() => {
                                                                                setOpen3(false);
                                                                      }}
                                                            >
                                                                      <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                  }>
                                                            <AlertTitle>Success</AlertTitle>
                                                            This is a success alert — <strong>check it out!</strong>
                                                  </Alert>
                                        </Collapse>
                                        <Button
                                                  disabled={open3}
                                                  variant="outlined"
                                                  onClick={() => {
                                                            setOpen3(true);
                                                  }}
                                        >
                                                  Re-open
                                        </Button>
                              </Stack>
                    </div>
          )
}

export default AlertsN;