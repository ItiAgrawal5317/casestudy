import React, {useState} from 'react';
import Cleave from 'cleave.js/react';
import { makeStyles } from '@material-ui/styles';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

//import 'animate.css';
//import './App.css';


const useStyle = makeStyles({
  container:{
    maxWidth: '1500px',
    margin: 'auto',
    paddingTop:'200px',
    boxSizing: 'border-box',
    fontFamily: 'Roboto ,Arial, Helvetica, sans-serif',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    background: '#eee',
    minHeight: '100vh',
    display: 'flex' ,
    padding: '2rem',
    alignItems: 'center'
  },

  form: {
    background: '#fff',
    maxWidth: '500px',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '3px 3px 40px #545454e8',
    position: 'relative',
    backgroundSize: 'cover'
  },

  select :{
  //margin: '1rem 0',
  padding: '0.75rem 0.25rem',
  outline: 'none',
  border: '1px solid #ccc',
  borderRadius: '5px',
  position: 'relative',
  width: '100%'
},
  

  card: {
    height: '200px',
    width: '100%',
    maxWidth: '385px',
    position: 'absolute',
    top: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '15px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${"https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#eee',
    filter: 'drop-shadow(1px 3px 10px #222)',
  
    animation: 'fadeIn .2s linear 1'
  },

  header :{
    display: 'flex',
    justifyContent: 'space-between',
    height: '70px'
  },

  sticker :{
    width: '50px',
    height: '40px',
    backgroundImage: `url(${"https://images.pexels.com/photos/728471/pexels-photo-728471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'contain',
    borderRadius: '5px'
  },

  logo:{
    maxWidth: '60px'
  },

  body: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60%'
  },

  footer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '75px'
  },

  btn:{
  width: '100%',
  padding: '1rem 0.5rem',
  marginTop: '1.5rem',
  outline: 'none',
  border: 'none',
  borderRadius: '7px',
  backgroundColor: '#060a24',
  color: '#FFF',
  letterSpacing: '1px',
  fontSize: '1.25rem',
  cursor: 'pointer',
  position: 'relative',
  zIndex: '9'
  },

  headingcls:{
    color:'#555',
  fontSize: '.90rem'
  },

  input: {
  //margin: '1rem 0',
  padding: '0.75rem 0.25rem',
  outline: 'none',
  border: '1px solid #ccc',
  borderRadius: '5px',
  position: 'relative',
  width: '100%'
  },

  inputcontainermt:{
  position: 'relative',
  fontSize: '1rem',
  color: '#333',
  marginTop: '8rem'
  },

  inputcontainer : {
    position: 'relative',
    fontSize: '1rem',
    color: '#333'
  },

  inputgrp : {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '0.5rem'
  }
  
  
})

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png"
]

function Payments() {
  const classes = useStyle();
  const history = useHistory();

  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('')
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
  // const [flip, setFlip] = useState(null);
  
  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
    // console.log(e.target.value);
  }

  const successAlert = () => {
    Swal.fire({  
        title: 'Payment Successfull!',  
        text: 'Thank you for shopping with us',
        icon: 'success'
      })
      history.push('/')
      ; 
}

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if(type === "visa") {
      setCardTypeUrl(imageUrls[0]);
      console.log("Visa")
    } else if(type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      console.log("Mastercard")
    } else if(type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      console.log("Discover")
    } else if(type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      console.log("Amex")
    } else if(type === "diners") {
      console.log("Diners")
      setCardTypeUrl(imageUrls[4])
    } else if(type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(imageUrls[5]);
    }
  }
  
  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  }

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  }

  

  // cleave.js logic 

  return (
       <div className={classes.container}>
        <form className={classes.form}>
            <div className={classes.card}>
                <div className={classes.header}>
                    <div className={classes.sticker}></div>
                    <div>
                      <img className={classes.logo} src={cardTypeUrl} alt="Card logo"/>
                    </div>
                </div>
                <div className={classes.body}>
                    <h2 className={classes.creditCardNumber}>{creditCardNum}</h2>
                </div>
                <div className={classes.footer}>
                    <div>
                        <h5>Card Holder</h5>
                        <h3>{cardHolder}</h3>
                    </div>
                    <div>
                        <h5>Expires</h5>
                        <h3>{expireMonth} / {expireYear}</h3>
                    </div>
                </div>
            </div>

            <div className={classes.inputcontainermt}>
                <h4 className={classes.headingcls}>Enter card number</h4>
                <Cleave
                className={classes.input}
                  delimiter="-"
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: handleType
                  }}
                  onChange={handleNum}
                  placeholder="Please enter your credit card number"
                />
            </div>

            <div className={classes.inputcontainer}>
                <h4 className={classes.headingcls}>Card Holder</h4>
                <input 
                className={classes.input}
                onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
            </div>

            <div className={classes.inputgrp}>
                <div className={classes.inputcontainer}>
                    <h4 className={classes.headingcls}>Expiration Month</h4>
                    <select 
                    className={classes.select}
                    value={expireMonth} onChange={handleExpMonth}>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className={classes.inputcontainer}>
                <h4 className={classes.headingcls}>Year</h4>
                <select 
                className={classes.select}
                value={expireYear} onChange={handleExpYear}>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                </div>
                <div className={classes.inputcontainer}>
                    <h4 className={classes.headingcls}>CVV</h4>
                    <input 
                    className={classes.input}
                    type="password" 
                    placeholder="CVV" 
                    required/>
                </div>
            </div>
            <div onClick= {successAlert} > 
            <button className={classes.btn}>{`Submit ${cardType} payment `} 
            </button>
            </div>
        </form>
    </div>
  );
}

export default Payments;