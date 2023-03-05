import { CgGoogle } from 'react-icons/cg';
import signupCSS from './signup.module.css'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    } else {
        //here we can check if username already exists
    }

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 20) {
        errors.username = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }
    return errors;
};

export function Signup() {

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className={signupCSS.main_container}>

            <h1>Sign up</h1>

            <form onSubmit={formik.handleSubmit}>
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                <input className={signupCSS.input} onBlur={formik.handleBlur} onChange={formik.handleChange} name='name' type="text" placeholder="Name"></input>
                {formik.errors.username && formik.touched.username ? <div>{formik.errors.username}</div> : null}
                <input className={signupCSS.input} onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' type="text" placeholder="Username"></input>
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                <input className={signupCSS.input} onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' type="text" placeholder="Email"></input>
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <input className={signupCSS.input} onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' type="text" placeholder="Password"></input>
                <input className={signupCSS.btn} type="submit"></input>
            </form>

            <div className={signupCSS.line_with_circle}>
                <hr />
                <div className={signupCSS.circle}>OR</div>
            </div>

            <div className={signupCSS.g_signin}>
                <a href="#"><CgGoogle /></a>
            </div>
        </div>
    )
}