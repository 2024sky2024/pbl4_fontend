import { useEffect, useState, useContext } from "react";
import "./Login.scss";
import { useHistory, Link } from "react-router-dom";
import React from 'react';

const Login = () => {
    let history = useHistory();
    const handleLogin = async() =>{
        history.push("/");
    }
    return (
        <>
            <div className="wrapper">
                <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-lg-1">
                            <div className="col mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border p-4 rounded form-login">
                                            <div className=" logo-body">
                                                <div>
                                                    <img
                                                        src="/img/logo.png"
                                                        width="30px"
                                                        height="30px"
                                                        className=""
                                                        alt="Logo"
                                                    />
                                                </div>
                                                <h3 className=" title-login ">Login</h3>
                                            </div>
                                            <p>
                                                Don't have an account yet?
                                                <Link to="/register">Register here</Link>
                                            </p>
                                            <div className="form-body">
                                                <form className="row g-3 form-login-header">
                                                    <div className="col-12 form-login-body">
                                                        <label for="inputEmailAddress" className="form-label ">
                                                            Email Address
                                                        </label>
                                                        <div className="form-input">
                                                            <input
                                                                type="text"
                                                                className="form-control form-input"

                                                                placeholder="Email address or phone number"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 form-login-body">
                                                        <label for="inputChoosePassword" className="form-labeln ">
                                                            Enter Password
                                                        </label>
                                                        <div className="input-group form-input" id="show_hide_password">
                                                            <input
                                                                type="password"
                                                                className="form-control form-input"
                                                                placeholder="Password"


                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-3 return text-center">
                                                        <Link to="#" >
                                                            <i className="fa fa-arrow-circle-left"></i>
                                                            <span title="Return to HomePage "> Return to HomePage </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={(e) => {
                                                                    e.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
                                                                    handleLogin();
                                                                }}
                                                            >
                                                                Login
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Login;