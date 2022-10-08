import React from 'react';
import './index.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButton = () => {

    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <div>
            <div className='container1'>
                <FormControl>
                    <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='female'
                        name='radio-buttons-group'
                    >
                        <FormControlLabel value='female' control={<Radio />} label='Female' />
                        <FormControlLabel value='male' control={<Radio />} label='Male' />
                        <FormControlLabel value='other' control={<Radio />} label='Other' />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='conntainer2'>
                <FormControl>
                    <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label'
                        name='row-radio-buttons-group'
                    >
                        <FormControlLabel value='female' control={<Radio />} label='Female' />
                        <FormControlLabel value='male' control={<Radio />} label='Male' />
                        <FormControlLabel value='other' control={<Radio />} label='Other' />
                        <FormControlLabel
                            value='disabled'
                            disabled
                            control={<Radio />}
                            label='other'
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='container3'>
                <Radio {...controlProps('a')} size="small" />
                <Radio {...controlProps('b')} />
                <Radio
                    {...controlProps('c')}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 28,
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default RadioButton;