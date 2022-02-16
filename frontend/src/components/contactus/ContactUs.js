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

  // contact: {
  //   "& > *": {
  //     margin: "15px 5px 0 5px",
  //   },
  // },

  container: {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "80px",
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
    backgroundColor: "#04AA6D",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#45a049",
    },
  },
});

const ContactUs = () => {
  const classes = useStyle();
  const history = useHistory();

  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    //var email = e.target.value

    if (!e) {
      setEmailError("Email is Required");
      return false;
    } else if (!validator.isEmail(e)) {
      setEmailError("Enter valid Email!");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const [nameError, setNameError] = useState("");
  const validateName = (e) => {
    var name = e;

    if (!name) {
      setNameError("Name is Required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const [messageError, setMessageError] = useState("");
  const validateMessage = (e) => {
    var message = e;

    if (!message) {
      setMessageError("Message is Required");
      return false;
    } else {
      setMessageError("");
      return true;
    }
  };

  const [subjectError, setSubjectError] = useState("");
  const validateSubject = (e) => {
    var subject = e;

    if (!subject) {
      setSubjectError("Subject is Required");
      return false;
    } else {
      setSubjectError("");
      return true;
    }
  };

  //api call
  function submitForm() {
    var flag = true;
    if (!validateEmail(value.email)) {
      flag = false;
    }
    if (!validateName(value.name)) {
      flag = false;
    }
    if (!validateSubject(value.subject)) {
      flag = false;
    }
    if (!validateMessage(value.message)) {
      flag = false;
    }
    if (flag === false) {
      return false;
    }

    axios("http://localhost:8081/aboutus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(value),
    })
      .then(function (response) {
        if (response.status === 200) {
          alert(
            "Thank You! We've recieved you message. Someone from our team will contact you soon."
          )
          history.push("/");
        } else {
          alert(response.data);
        }
      })
      .catch(function (response) {
        alert("User :" + value.name + " please try Again");
      });
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1 className="title" style={{ color: "#ff3f6c", textAlign: "center" }}>
          Contact Us
        </h1>
        <p>
          Let us know what you think! In order to provide better service, please
          do not hesitate to give us your feedback. Thank you.
        </p>
        <hr />
        <form className={classes.component}>
          <div className={classes.content}>
            <div>
              <Box className={classes.contact}>
                <label className={classes.labelstyle}>Name</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={inputText}
                  value={value.name}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {nameError}
                </span>

                <br />
                <label className={classes.labelstyle}>Email</label>
                <input
                  className={classes.inputmsg}
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={inputText}
                  value={value.email}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {emailError}
                </span>

                <br />
                <label className={classes.labelstyle}>Subject</label>
                <input
                  className={classes.inputmsg}
                  type="text"
                  name="subject"
                  placeholder="Enter your query Subject"
                  onChange={inputText}
                  value={value.subject}
                  required={true}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {subjectError}
                </span>

                <br />
                <label className={classes.labelstyle}>Message</label>
                <textarea
                  className={classes.inputmsg}
                  type="text"
                  name="message"
                  placeholder="Enter message in details"
                  onChange={inputText}
                  value={value.message}
                  required={true}
                  style={{ height: "200px" }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {messageError}
                </span>
                <br />
                <Button
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={submitForm}
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

export default ContactUs;
