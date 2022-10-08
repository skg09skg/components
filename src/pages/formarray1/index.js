import React from 'react';
import './index.scss';
import { useForm } from 'react-hook-form';

const FormArray1 = () => {

    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const addFriend = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeFriend = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const clearFriends = () => {
        setIndexes([]);
    };


    return (
        <div className='new'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {indexes.map(index => {
                    const fieldName = `friends[${index}]`;
                    return (
                        <div name={fieldName} key={fieldName}>
                            <label>
                                First Name {index}:
                                <input
                                    type='text'
                                    name={`${fieldName}.firstName`}
                                    onSubmit={register}
                                />
                            </label>

                            <label>
                                Last Name {index}:
                                <input
                                    type='text'
                                    name={`${fieldName}.lastName`}
                                    onSubmit={register}
                                />
                            </label>
                            <button type='button' onClick={removeFriend(index)}>
                                Remove
                            </button>
                        </div>
                    );
                })}

                <button type='button' onClick={addFriend}>
                    Add Friend
                </button>
                <button type='button' onClick={clearFriends}>
                    Clear Friends
                </button>
                <input type='submit' />
            </form>
        </div>
    )
}

export default FormArray1;