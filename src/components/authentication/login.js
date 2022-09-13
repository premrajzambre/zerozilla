import React,{useEffect}  from "react";
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom"
import {loginSchema} from "./loginIndex";

const Login=()=>{
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            const auth = localStorage.getItem("user");
            if(auth){
                navigate("/");
            }
        };
    });

    const onSubmit = async (values, actions) => {
        console.log(values);
        // console.log(actions);
        let result = await fetch("http://localhost:5003/zerozilla/auth/login",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values),
        });
        result = await result.json();
        if(result && result.username){
            localStorage.setItem('user',JSON.stringify(result));
            navigate("/");
        }
        else{
            alert(result.message);
        }
        // console.warn(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

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
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    return(
        <>
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
                <button disabled={isSubmitting} type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Login;