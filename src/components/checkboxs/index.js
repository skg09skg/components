import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

const CheckBox = () => {

          const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

          const [state, setState] = React.useState({
                    gilad: true,
                    jason: false,
                    antoine: false,
          });

          const handleChange = (event) => {
                    setState({
                              ...state,
                              [event.target.name]: event.target.checked,
                    });
          };

          const { gilad, jason, antoine } = state;
          const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


          return (
                    <div>
                              <div className='container1'>
                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                        <Checkbox
                                                  {...label}
                                                  icon={<BookmarkBorderIcon />}
                                                  checkedIcon={<BookmarkIcon />}
                                        />
                                        <Checkbox {...label} defaultChecked />
                                        <Checkbox {...label} defaultChecked color="secondary" />
                                        <Checkbox {...label} defaultChecked color="success" />
                                        <Checkbox {...label} defaultChecked color="default" />
                                        <Checkbox
                                                  {...label}
                                                  defaultChecked
                                                  sx={{
                                                            color: pink[800],
                                                            '&.Mui-checked': {
                                                                      color: pink[600],
                                                            },
                                                  }}
                                        />
                              </div>
                              <div className='container2'>
                                        <Box sx={{ display: 'flex' }}>
                                                  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                                            <FormLabel component="legend">Assign responsibility</FormLabel>
                                                            <FormGroup>
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                                                                }
                                                                                label="Gilad Gray"
                                                                      />
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                                                                }
                                                                                label="Jason Killian"
                                                                      />
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                                                }
                                                                                label="Antoine Llorca"
                                                                      />
                                                            </FormGroup>
                                                            <FormHelperText>Be careful</FormHelperText>
                                                  </FormControl>
                                                  <FormControl
                                                            required
                                                            error={error}
                                                            component="fieldset"
                                                            sx={{ m: 3 }}
                                                            variant="standard"
                                                  >
                                                            <FormLabel component="legend">Pick two</FormLabel>
                                                            <FormGroup>
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                                                                }
                                                                                label="Gilad Gray"
                                                                      />
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                                                                }
                                                                                label="Jason Killian"
                                                                      />
                                                                      <FormControlLabel
                                                                                control={
                                                                                          <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                                                                }
                                                                                label="Antoine Llorca"
                                                                      />
                                                            </FormGroup>
                                                            <FormHelperText>You can display an error</FormHelperText>
                                                  </FormControl>
                                        </Box>
                              </div>
                    </div>
          )
}

export default CheckBox;