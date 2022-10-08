import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';

const SelectInput = () => {
          const [age, setAge] = React.useState('');

          const handleChange = (event) => {
                    setAge(event.target.value);
          };


          //next//
          const ITEM_HEIGHT = 48;
          const ITEM_PADDING_TOP = 8;
          const MenuProps = {
                    PaperProps: {
                              style: {
                                        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                                        width: 250,
                              },
                    },
          };

          const names = [
                    'Oliver Hansen',
                    'Van Henry',
                    'April Tucker',
                    'Ralph Hubbard',
                    'Omar Alexander',
                    'Carlos Abbott',
                    'Miriam Wagner',
                    'Bradley Wilkerson',
                    'Virginia Andrews',
                    'Kelly Snyder',
          ];

          const [personName, setPersonName] = React.useState([]);

          const handleChange1 = (event) => {
                    const {
                              target: { value },
                    } = event;
                    setPersonName(
                              // On autofill we get a stringified value.
                              typeof value === 'string' ? value.split(',') : value,
                    );
          };

          //next//

          const [open, setOpen] = React.useState(false);
          const [age1, setAge1] = React.useState('');

          const handleChange2 = (event) => {
                    setAge1(Number(event.target.value) || '');
          };

          const handleClickOpen = () => {
                    setOpen(true);
          };

          const handleClose = (event, reason) => {
                    if (reason !== 'backdropClick') {
                              setOpen(false);
                    }
          };

          return (
                    <div>
                              <div className='container1'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                                                  <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
                                                  <Select
                                                            labelId="demo-simple-select-disabled-label"
                                                            id="demo-simple-select-disabled"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                  >
                                                            <MenuItem value="">
                                                                      <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                  </Select>
                                                  <FormHelperText>Disabled</FormHelperText>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} error>
                                                  <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                                                  <Select
                                                            labelId="demo-simple-select-error-label"
                                                            id="demo-simple-select-error"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                            renderValue={(value) => `⚠️  - ${value}`}
                                                  >
                                                            <MenuItem value="">
                                                                      <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                  </Select>
                                                  <FormHelperText>Error</FormHelperText>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                  <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                                                  <Select
                                                            labelId="demo-simple-select-readonly-label"
                                                            id="demo-simple-select-readonly"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                            inputProps={{ readOnly: true }}
                                                  >
                                                            <MenuItem value="">
                                                                      <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                  </Select>
                                                  <FormHelperText>Read only</FormHelperText>
                                        </FormControl>
                                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                                                  <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                                                  <Select
                                                            labelId="demo-simple-select-required-label"
                                                            id="demo-simple-select-required"
                                                            value={age}
                                                            label="Age *"
                                                            onChange={handleChange}
                                                  >
                                                            <MenuItem value="">
                                                                      <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                  </Select>
                                                  <FormHelperText>Required</FormHelperText>
                                        </FormControl>
                              </div>
                              <div className='container2'>
                                        <FormControl sx={{ m: 1, width: 300 }}>
                                                  <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                                  <Select
                                                            labelId="demo-multiple-checkbox-label"
                                                            id="demo-multiple-checkbox"
                                                            multiple
                                                            value={personName}
                                                            onChange={handleChange1}
                                                            input={<OutlinedInput label="Tag" />}
                                                            renderValue={(selected) => selected.join(', ')}
                                                            MenuProps={MenuProps}
                                                  >
                                                            {names.map((name) => (
                                                                      <MenuItem key={name} value={name}>
                                                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                                                <ListItemText primary={name} />
                                                                      </MenuItem>
                                                            ))}
                                                  </Select>
                                        </FormControl>
                              </div>
                              <div className='container3'>
                                        <Button onClick={handleClickOpen}>Open select dialog</Button>
                                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                                                  <DialogTitle>Fill the form</DialogTitle>
                                                  <DialogContent>
                                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                                                <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                                                                                <Select
                                                                                          native
                                                                                          value={age1}
                                                                                          onChange={handleChange}
                                                                                          input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                                                                                >
                                                                                          <option aria-label="None" value="" />
                                                                                          <option value={10}>Ten</option>
                                                                                          <option value={20}>Twenty</option>
                                                                                          <option value={30}>Thirty</option>
                                                                                </Select>
                                                                      </FormControl>
                                                                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                                                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                                                                <Select
                                                                                          labelId="demo-dialog-select-label"
                                                                                          id="demo-dialog-select"
                                                                                          value={age}
                                                                                          onChange={handleChange}
                                                                                          input={<OutlinedInput label="Age" />}
                                                                                >
                                                                                          <MenuItem value="">
                                                                                                    <em>None</em>
                                                                                          </MenuItem>
                                                                                          <MenuItem value={10}>Ten</MenuItem>
                                                                                          <MenuItem value={20}>Twenty</MenuItem>
                                                                                          <MenuItem value={30}>Thirty</MenuItem>
                                                                                </Select>
                                                                      </FormControl>
                                                            </Box>
                                                  </DialogContent>
                                                  <DialogActions>
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button onClick={handleClose}>Ok</Button>
                                                  </DialogActions>
                                        </Dialog>
                              </div>
                              <div className='container1'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                  <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                                                  <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                                            <option aria-label="None" value="" />
                                                            <optgroup label="Category 1">
                                                                      <option value={1}>Option 1</option>
                                                                      <option value={2}>Option 2</option>
                                                            </optgroup>
                                                            <optgroup label="Category 2">
                                                                      <option value={3}>Option 3</option>
                                                                      <option value={4}>Option 4</option>
                                                            </optgroup>
                                                  </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                  <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                                                  <Select defaultValue="" id="grouped-select" label="Grouping">
                                                            <MenuItem value="">
                                                                      <em>None</em>
                                                            </MenuItem>
                                                            <ListSubheader>Category 1</ListSubheader>
                                                            <MenuItem value={1}>Option 1</MenuItem>
                                                            <MenuItem value={2}>Option 2</MenuItem>
                                                            <ListSubheader>Category 2</ListSubheader>
                                                            <MenuItem value={3}>Option 3</MenuItem>
                                                            <MenuItem value={4}>Option 4</MenuItem>
                                                  </Select>
                                        </FormControl>
                              </div>
                    </div>
          )
}

export default SelectInput;