import { makeStyles, Box, Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import validator from "validator";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  section: {
    fontFamily: "Arial, Helvetica, sans-serif",
    boxSizing: "border-box",
  },

  image: {
    backgroundImage: `url(${'https://cdn.static-zoutons.com/images/originals/blog/OFFERIMAGEBLOGMYNTRA1_1_1639135846.png'})`,
    height:'20em',
    backgroundRepeat: 'no-repeat',
    width: 'auto',
    paddingTop: '100px'
    //padding: '45px 35px'
},

  container: {
    borderRadius: "5px",
    backgroundColor: "#FFDAB9",
    padding: "100px",
  },

  labelstyle: {
    color: "black",
    fontSize: "15px",
  },

  inputmsg: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginTop: "6px",
    marginBottom: "16px",
    resize: "vertical",
  },

  submitBtn: {
    backgroundColor: "#2F4F4F",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FF8C00",
    },
  },
});

const Invitemessage = () => {
  const classes = useStyle();
  const history = useHistory();

  const [value, setValue] = useState({
    username: "",
    useremail: "",
    code: "",
    friendname:"",
    phone: "",
  });

  const inputText = (e) => {
    const { name, value } = e.target;

    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const [useremailError, setUserEmailError] = useState("");
  const validateUserEmail = (e) => {
    //var email = e.target.value

    if (!e) {
      setUserEmailError("Email is Required");
      return false;
    } else if (!validator.isEmail(e)) {
        setUserEmailError("Enter valid Email!");
      return false;
    } else {
        setUserEmailError("");
      return true;
    }
  };

  const [usernameError, setUserNameError] = useState("");
  const validateUserName = (e) => {
    var username = e;

    if (!username) {
        setUserNameError("Name is Required");
      return false;
    } else {
        setUserNameError("");
      return true;
    }
  };

  const [codeError, setCodeError] = useState("");
  const validateCode = (e) => {
    var code = e;

    if (!code) {
        setCodeError("Code is Required");
      return false;
    } else {
        setCodeError("");
      return true;
    }
  };

  const [friendnameError, setFriendNameError] = useState("");
  const validateFriendeName = (e) => {
    var username = e;

    if (!username) {
        setFriendNameError("Name is Required");
      return false;
    } else {
        setFriendNameError("");
      return true;
    }
  };

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



  //api call
  function InviteFriends() {
    var flag = true;
    if (!validateUserEmail(value.useremail)) {
      flag = false;
    }
    if (!validateUserName(value.username)) {
      flag = false;
    }
    if (!validateCode(value.code)) {
      flag = false;
    }
    if (!validateFriendeName(value.friendname)) {
      flag = false;
    }
    if (!validatePhone(value.phone)) {
        flag = false;
    }
    if (flag === false) {
      return false;
    }

    axios("http://localhost:8083/inviteperson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(value),
    })
      .then(function (response) {
        if (response.status === 200) {
          alert("Thank you for inviting your friend"
            )
          history.push("/");
        } else {
          alert(response.data);
        }
      })
      .catch(function (response) {
        alert("User :" + value.name + " already exist");
      });
  }

  return (
    <div className={classes.section}>
    <div className={classes.container}>
    <div className={classes.image}>
    </div>
    <p style={{ fontWeight: 600, fontSize:'17px', color: '#0B5345' }}>
        Invite your friends to Myntra and Earn Offers....!!!!....!!!!
    </p>
        <hr />
        <form className={classes.component}>
          <div className={classes.content}>
            <div>
              <Box className={classes.contact}>
                <label className={classes.labelstyle}>Your Name</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="username"
                  placeholder="Enter Your Name"
                  onChange={inputText}
                  value={value.username}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {usernameError}
                </span>

                <br />
                <label className={classes.labelstyle}>Your Email</label>
                <input
                  className={classes.inputmsg}
                  type="email"
                  name="useremail"
                  placeholder="Enter Your Email"
                  onChange={inputText}
                  value={value.useremail}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {useremailError}
                </span>

                <br />
                <label className={classes.labelstyle}>Refer Code</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="code"
                  placeholder="Enter Code"
                  onChange={inputText}
                  value={value.code}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {codeError}
                </span>

                <br />
                <label className={classes.labelstyle}>Friend's Name</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="friendname"
                  placeholder="Enter Your Friend name"
                  onChange={inputText}
                  value={value.friendname}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {friendnameError}
                </span>
                
                <br />
                <label className={classes.labelstyle}>Friend's Phone Number</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="phone"
                  placeholder="Enter Your Friend Phone Number"
                  onChange={inputText}
                  value={value.phone}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {phoneError}
                </span>
                <br />
                <Button
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={InviteFriends}
                >
                  Submit
                </Button>
              </Box>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invitemessage;
