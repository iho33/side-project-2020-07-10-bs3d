import React from 'react';
import './EnterTimeForm.scss';

export default function EnterTimeForm(props) {

    return (
        <form className="form" onSubmit={props.submitHandler}>
            <label className="form__label">How much time (in minutes) do you want to burn?</label>
            <input type="number" name="timeInMinutes" />
            <button type="submit" name="submit">Find me some movies!</button>
        </form>
    );
}