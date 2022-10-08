import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const Errormessage1 = () => {

    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    const { register, errors, handleSubmit } = useForm({
        criteriaMode: 'all',
    });
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('singleErrorInput', { required: 'This is required.' })} />
                <ErrorMessage errors={errors} name='singleErrorInput' />

                <ErrorMessage
                    errors={errors}
                    name='singleErrorInput'
                    render={({ message }) => <p>{message}</p>}
                />

                <input type='submit' />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='multipleErrorInput'
                    ref={register({
                        required: 'This is required.',
                        pattern: {
                            value: /d+/,
                            message: 'This input is number only.',
                        },
                        maxLength: {
                            value: 10,
                            message: 'This input exceed maxLength.',
                        },
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name='multipleErrorInput'
                    render={({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                />

                <input type='submit' />
            </form>
        </div>
    )
}

export default Errormessage1;