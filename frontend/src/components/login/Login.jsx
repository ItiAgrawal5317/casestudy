//import state for condition
//import { useState } from "react";
import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";

const useStyle = makeStyles({
    component: {
        backgroundColor: '#FADBD8 ',//'#FAE5D3 ',
        height: '52em',
        width: 'auto',
        display: 'block',
        paddingTop: 85,
        paddingLeft: 450,
        paddingRight: 500,
        position: 'relative'
    },

    image: {
        backgroundImage: `url(${'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/9/da75002d-5bbd-4e5d-91cb-6cb4f481900c1625769349241-Banner_Hamburger_400.png'})`,
        height: '20em',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        //padding: '45px 35px'
    },

    login: {
        //padding: '45px 35px'
        display: 'flex',
        flex: 1,
        height: '24em',
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

    loginBtn: {
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

})


const Login = ({setAccount}) => {
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

    //const [user, setUser] = useState('');

    function submitForm() {
        var flag = true;
        if (!validateEmail(value.email)) {
            flag = false;
        }
        if (!validatePassword(value.password)) {
            flag = false;
        }
        if (flag === false) {
            return false;
        }


        const result = axios("http://localhost:8080/validateUser", {
            method: "GET",
            
            params: {
                "email" : encodeURIComponent(value.email),
                "password" : encodeURIComponent(value.password)
            }
        }).then(function (response) {
            if(response.status===200){
                console.log(response);
                history.push("/");
                localStorage.setItem("currentUser",response.data.firstName);
                //setAccount(value.email);
            }else {
                alert(response.data);
            }
          }).catch(function (response) {
            alert("User: " +value.email +" with password: "+value.password+" is Invalid.");
        })
       
    }

    return (
        <Box className={classes.component}>
            <div className={classes.content}>
                <div>
                    <div className={classes.image}>
                    </div>

                    <Box className={classes.login}>
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
                        <Typography className={classes.text}>By continuing, I agree to the Terms of Use and Privacy Policy</Typography>
                        <Button
                            variant="contained"
                            className={classes.loginBtn}
                            onClick={submitForm}
                        >
                            Login
                        </Button>
                        <Link to='/signup' className={classes.createText}>
                            New to Myntra? Create an account
                        </Link>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default Login;