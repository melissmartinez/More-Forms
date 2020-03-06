import React, { useState } from 'react';

const MoreForms = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name </label>
                <input type="text" name="firstName" placeholder="Search..." onChange={onChangeHandler} />
                <br />
                <small>{(formState.firstName.length > 0 && formState.firstName.length < 2) ? "Error. First Name must be at least 2 characters." : ""}</small>

                <br />
                <label>Last Name </label>
                <input type="text" name="lastName" placeholder="Search..." onChange={onChangeHandler} />
                <br />
                <small>{(formState.lastName.length > 0 && formState.lastName.length < 2) ? "Error. Last Name must be at least 2 characters." : ""}</small>

                <br />
                <label>Email</label>
                <input type="email" name="email" placeholder="Search..." onChange={onChangeHandler} />
                <br />
                <small>{(formState.email.length > 0 && formState.email.length < 2) ? "Error. Email must be at least 5 characters." : ""}</small>

                <br />
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Search..." onChange={onChangeHandler} />
                <br />
                <small>{(formState.confirmPassword.length > 0 && formState.confirmPassword !== formState.password) ? "Error. The passwords must match." : ""}</small>

                <br />
                <label>Password</label>
                <input type="password" name="password" placeholder="Search..." onChange={onChangeHandler} />
                <br />
                <small>{(formState.password.length > 0 && formState.password.length < 8) ? "Error. Password be at least 8 characters." : ""}</small>
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default MoreForms;