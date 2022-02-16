
//Import tags from material UI
import { Box, Button, makeStyles, TextField } from "@material-ui/core";
//import Success from "./Success";
//import Error from "./Error";

//Import axios from axios package for api call
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import validator from "validator";


const useStyle = makeStyles({
    component: {
        backgroundColor: '#FADBD8 ',//'#FAE5D3 ',
        height: '60em',
        width: 'auto',
        display: 'block',
        paddingTop: 85,
        paddingLeft: 450,
        paddingRight: 500,
        position: 'relative'
    },

    image: {
        backgroundImage: `url(${'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/9/da75002d-5bbd-4e5d-91cb-6cb4f481900c1625769349241-Banner_Hamburger_400.png'})`,
        height: '15em',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        //padding: '45px 35px'
    },

    login: {
        //padding: '45px 35px'
        display: 'flex',
        flex: 1,
        height: '35em',
        flexDirection: 'column',
        backgroundColor: '#FDF2E9',
        marginTop: '2px',
        '& > *': {
            margin: '15px 5px 0 5px',
        }
    },

    text: {
        color: '#878787',
        fontSize: 14
    },

    signUpBtn: {
        textTransform: 'none',
        background: '#ff3f6c',
        color: 'white',
        height: 40,
        borderRadius: 2
    },

    createText: {
        textAlign: 'center',
        marginTop: '50px',
        fontSize: 16,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }

});


const SignUp = () => {
    const classes = useStyle();
    const history = useHistory();


    //use state for intial value 
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        contact: "",
        post: ""
    });

    const inputText = (e) => {
        const { name, value } = e.target;

        setValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    };


    //Validation for email
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        //var email = e.target.value

        if (!e) {
            setEmailError('Email is Required');
            return false;
        }
        else if (!validator.isEmail(e)) {
            setEmailError('Enter valid Email!');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    }
    const [firstNameError, setFirstNameError] = useState('')
    const validateFirstName = (e) => {
        var firstName = e

        if (!firstName) {
            setFirstNameError('firstName is Required');
            return false;
        } else {
            setFirstNameError('');
            return true;
        }
    }
    const [lastNameError, setLastNameError] = useState('')
    const validateLastName = (e) => {
        var lastName = e

        if (!lastName) {
            setLastNameError('lastName is Required');
            return false;
        } else {
            setLastNameError('');
            return true;
        }
    }
    const [phoneError, setPhoneError] = useState('')
    const validatePhone = (e) => {
        var phone = e

        if (!phone) {
            setPhoneError('phone is Required');
            return false;
        }
        else if (!(validator.isNumeric(phone) && phone.length === 10)) {
            setPhoneError('Enter valid phone!');
            return false;
        } else {
            setPhoneError('');
            return true;
        }
    }

    const [passwordError, setPasswordError] = useState('')
    const validatePassword = (e) => {
        var password = e

        if (!password) {
            setPasswordError('password is Required');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    }

    //const [user, setUser] = useState();
    //const [success, setSuccess] = useState();

    //api call
    function submitForm() {
        var flag = true;
        if (!validateEmail(value.email)) {
            flag = false;
        }
        if (!validateFirstName(value.firstName)) {
            flag = false;
        }
        if (!validateLastName(value.lastName)) {
            flag = false;
        }
        if (!validatePhone(value.phone)) {
            flag = false;
        }
        if (!validatePassword(value.password)) {
            flag = false;
        }
        if (flag === false) {
            return false;
        }


        axios("http://localhost:8080/registration", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(value)
        }).then(function (response) {
            if (response.status === 200) {
                alert("Registration Successfully! Press OK to Continue Login")
                history.push("/login");
            } else {
                alert(response.data);
            }
        }).catch(function (response) {
            alert("User with email: " + value.email +  " already exist.");
        })
        }


        return (
            <form className={classes.component}>
                <div className={classes.content}>
                    <div>
                        <div className={classes.image}>
                        </div>
                        <Box className={classes.login}>
                            <TextField
                                type="text"
                                name="firstName"
                                label='Enter First Name'
                                onChange={inputText}
                                value={value.firstName}
                                required={true}
                                
                                    /*style={{ border: '2px solid black', borderRadius: '5px' }}*/ />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{firstNameError}</span>
                            <TextField
                                type="text"
                                name="lastName"
                                label='Enter Last Name'
                                onChange={inputText}
                                value={value.lastName}
                                required={true}
                                    /*style={{ border: '2px solid black', borderRadius: '5px' }}*/ />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{lastNameError}</span>
                            <TextField
                                type="email"
                                name="email"
                                label='Enter Email'
                                onChange={inputText}
                                value={value.email}
                                required={true}
                                    /*style={{ border: '2px solid black', borderRadius: '5px' }}*/ />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{emailError}</span>

                            <TextField
                                type="password"
                                name="password"
                                label='Enter Password'
                                onChange={inputText}
                                value={value.password}
                                required={true}
                                    /*style={{ border: '2px solid black', borderRadius: '5px' }}*/ />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{passwordError}</span>
                            <TextField
                                type="text"
                                name="phone"
                                label='Enter Contact'
                                onChange={inputText}
                                value={value.phone}
                                required={true}
                                    /*style={{ border: '2px solid black', borderRadius: '5px' }}*/ />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{phoneError}</span>
                            <Button
                                variant="contained"
                                className={classes.signUpBtn}
                                onClick={submitForm}
                            >
                                SignUp
                            </Button>

                        </Box>
                    </div>
                </div>
            </form>
        )
    }

    export default SignUp;