import React from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";

const FormArray2 = () => {

    const { register, control, handleSubmit, remove, reset, trigger, setError } = useForm({
    });
    const { fields, append } = useFieldArray({
        control,
        name: "test"
    });

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <ul>
                {fields.map((item, index) => (
                    <li key={item.id}>
                        <input {...register(`test.${index}.firstName`)} />
                        <Controller
                            render={({ field }) => <input {...field} />}
                            name={`test.${index}.lastName`}
                            control={control}
                        />
                        <button type="button" onClick={() => remove(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() => append({ firstName: "bill", lastName: "luo" })}
            >
                append
            </button>
            <input type="submit" />
        </form>
    )
}

export default FormArray2;