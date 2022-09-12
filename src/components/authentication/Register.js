import React from "react";
import { useFormik } from 'formik';
import {userSchema} from "./registerIndex";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const Register=()=>{
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: userSchema,
        onSubmit,
    });

    console.log(errors);

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <label htmlFor="username">User Name</label>
            <input
                id="username"
                type="text"
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && touched.username ? "input-error" : ""}
            />
            {errors.username && touched.username && <p className="error">{errors.username}</p>}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
            />
            {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
            )}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
                }
            />
            {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
            )}
            <button disabled={isSubmitting} type="submit">
                Submit
            </button>
        </form>
    );
}

export default Register;