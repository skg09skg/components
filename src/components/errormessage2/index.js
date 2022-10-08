import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import Header from './Header';


const ErrorMessage2 = () => {

    // const { register, handleSubmit } = useForm();
    // const [data, setData] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input {...register('firstName',{ required: true, maxLength: 10 })} placeholder='First name' />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <select {...register('category')}>
                    <option value=''>Select...</option>
                    <option value='A'>Option A</option>
                    <option value='B'>Option B</option>
                </select>
                <textarea {...register('aboutYou')} placeholder='About you' />
                <p>{data}</p>
                <input type='submit' />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && <p>Last name is required</p>}

                <input {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>

                <input type="submit" />
            </form>
        </div>
    )
}

export default ErrorMessage2;