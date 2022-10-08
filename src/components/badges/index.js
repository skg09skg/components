import React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


const Badges = () => {

          const [count, setCount] = React.useState(1);
          const [invisible, setInvisible] = React.useState(false);

          const handleBadgeVisibility = () => {
                    setInvisible(!invisible);
          };

          return (
                    <div>
                              <div className='container1'>
                                        <Stack spacing={2} direction="row">
                                                  <Badge badgeContent={4} color="secondary">
                                                            <MailIcon color="action" />
                                                  </Badge>
                                                  <Badge badgeContent={4} color="success">
                                                            <MailIcon color="action" />
                                                  </Badge>
                                                  <Badge color="secondary" badgeContent={0}>
                                                            <MailIcon />
                                                  </Badge>
                                                  <Badge color="secondary" badgeContent={0} showZero>
                                                            <MailIcon />
                                                  </Badge>
                                        </Stack>
                              </div>
                              <div className='container3'>
                                        <Stack spacing={2} direction="row">
                                                  <Badge anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                  }} color="secondary" badgeContent={0} showZero>
                                                            <MailIcon />
                                                  </Badge>
                                                  <Badge anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'right',
                                                  }} color="secondary" badgeContent={0} showZero>
                                                            <MailIcon />
                                                  </Badge>
                                        </Stack>
                              </div>
                              <div className='container2'>
                                        <Box
                                                  sx={{
                                                            color: 'action.active',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            '& > *': {
                                                                      marginBottom: 2,
                                                            },
                                                            '& .MuiBadge-root': {
                                                                      marginRight: 4,
                                                            },
                                                  }}
                                        >
                                                  <div>
                                                            <Badge color="secondary" badgeContent={count}>
                                                                      <MailIcon />
                                                            </Badge>
                                                            <ButtonGroup>
                                                                      <Button
                                                                                aria-label="reduce"
                                                                                onClick={() => {
                                                                                          setCount(Math.max(count - 1, 0));
                                                                                }}
                                                                      >
                                                                                <RemoveIcon fontSize="small" />
                                                                      </Button>
                                                                      <Button
                                                                                aria-label="increase"
                                                                                onClick={() => {
                                                                                          setCount(count + 1);
                                                                                }}
                                                                      >
                                                                                <AddIcon fontSize="small" />
                                                                      </Button>
                                                            </ButtonGroup>
                                                  </div>
                                                  <div>
                                                            <Badge color="secondary" variant="dot" invisible={invisible}>
                                                                      <MailIcon />
                                                            </Badge>
                                                            <FormControlLabel
                                                                      sx={{ color: 'text.primary' }}
                                                                      control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                                                                      label="Show Badge"
                                                            />
                                                  </div>
                                        </Box>
                              </div>
                    </div>
          )
}

export default Badges;