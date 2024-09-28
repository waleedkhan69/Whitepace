import React, { Fragment, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formData.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const submit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Congratulations! Your form has been successfully submitted");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Fragment>
            <div className='flex justify-center items-center min-h-screen p-4 bg-gray-100'>
                <form onSubmit={submit} className='flex flex-col bg-blue-300 rounded shadow-lg w-full max-w-md p-8'>
                    <h1 className='text-center text-3xl text-white'>Login Now</h1>

                    <label htmlFor="firstName" className='mt-4'>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        autoComplete="off"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='mt-1 p-2 border-none outline-none rounded shadow-lg'
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                    <label htmlFor="lastName" className='mt-4'>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='mt-1 p-2 border-none outline-none rounded shadow-lg'
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                    <label htmlFor="email" className='mt-4'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Please Enter Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className='mt-1 p-2 border-none outline-none rounded shadow-lg'
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <label htmlFor="password" className='mt-4'>Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='mt-1 p-2 border-none outline-none rounded shadow-lg w-full'
                        />
                        <div
                            className="absolute right-3 top-2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <button type="submit" className='mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300'>Submit</button>
                </form>
            </div>
        </Fragment>
    );
};

export default LoginPage;
