import React from "react";
//import { useContext } from "react";
import { Box, makeStyles, Badge, Button, Divider } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

//Import for Icon
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

// Import link for switch the page via clicking on tag as url
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

//Import Components
//import Login from "../login/Login";
//import {LoginContext} from "../../context/ContextProvider";


const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: '20px',
        marginRight: '10px',
        marginBottom: '20px',
        marginLeft: '10px',
        height: '40px',
        alignItems: 'center',
        lineHeight: 0,
        position: 'relative',
        '& > *': {
            marginRight: 20,
            fontWeight: 2,
            textDecoration: 'none'
        }
    },

    profileButton: {
        borderRadius: 2,
        //visibility: 'hidden',
        boxShadow: 'none',
        height: 40,
        paddingLeft: '5px',
        paddingRight: '10px'
    },

    usertitle: {
        margin: '0 0 0 10px',
        color: '#000',
        position: 'absolute',
        bottom: '4px',
        fontSize: '12px',
        fontWeight: 700,
        display: 'inline-block',
        paddingTop: '10px',
        lineHeight: '6px',
        textTransform: "none"
    },

    userIcon: {
        margin: '10px 0 0 10px',
        position: 'relative',
        bottom: '13px',
        display: 'block',
        width: '40px',
        height: '25px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: '-298px -56px'
    },

    menu: {
        display: 'block',
        //visibility: 'hidden'
    },

    menucontent: {
        display: 'block',
        paddingBottom: '2px'
    },

    menumsg1: {
        fontWeight: 700,
        height: '22px',
        paddingLeft: '20px',
        paddingTop: '20px',
        fontSize: '14px'
    },

    menumsg2: {
        fontSize: '14px',
        width: '100%',
        paddingTop: '18px',
        //margin: '0px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: '10px',
        height: '30px',
        color: '#282c3f',
        paddingLeft: '20px'
    },

    loginButton: {
        display: 'inline-block',
        padding: '12px 18px',
        border: '1px solid #eaeaec',
        borderRadius: '2px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '14px',
        color: '#ff3f6c',
        fontWeight: 500,
        margin: '10px 5px 6px 23px'
    },

    bag: {
        display: 'flex',
    }

})

const HeaderButtons = () => {
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {cartItems} = useSelector(state => state.cart);
    //const { account, setAccount } = useContext(LoginContext)
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const wishlist = () => {
        history.push("/wishlist")
    }

    const contactUs = () => {
        history.push("/contactus")
    }

    const user = localStorage.getItem('currentUser')
    console.log(user);

    function logOut(){
        localStorage.removeItem('currentUser');
        window.location.href='/'
      }



    return (
        <Box className={classes.wrapper}>
            
            <Button className={classes.profile}>
            {
                //account ? <Typography>{account}</Typography>:
                <Button className={classes.profileButton}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}>
                    <span className={classes.userIcon} > < PersonOutlineIcon style={{ color: 'grey' }} /> </span>
                    <span className={classes.usertitle}> Profile </span>
                </Button>
            }
            {user ? (
            <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 470, left: 1300 }}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                        style: {
                            borderRadius: 0,
                            width: 300,
                            height: 390,
                        },
                    }}
                >

                    <div className={classes.menu}>
                        <div className={classes.menucontent} >
                            <div className={classes.menumsg1}>Welcome </div>
                            <div className={classes.menumsg2}>To access account and manage orders</div>
                        </div>
                        <MenuItem >
                         {user}
                      </MenuItem>
                       
                        <MenuItem onClick={logOut}>LogOut</MenuItem>
                        
                        <Divider />
                        <MenuItem onClick={handleClose}>Orders</MenuItem>
                        <MenuItem onClick={() => wishlist()}>Wishlist</MenuItem>
                        <MenuItem onClick={contactUs}>Contact Us</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Myntra Credit</MenuItem>
                        <MenuItem onClick={handleClose}>Coupons</MenuItem>
                        <MenuItem onClick={handleClose}>Saved Cards</MenuItem>
                        <MenuItem onClick={handleClose}>Saved Addresses</MenuItem>
                    </div>
                </Menu>
                ) : (
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 470, left: 1300 }}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                        style: {
                            borderRadius: 0,
                            width: 300,
                            height: 390,
                        },
                    }}
                >

                    <div className={classes.menu}>
                        <div className={classes.menucontent} >
                            <div className={classes.menumsg1}>Welcome</div>
                            <div className={classes.menumsg2}>To access account and manage orders</div>
                        </div>
                            <Link to="/login" className={classes.loginButton}
                            //setAccount={setAccount}
                            > 
                            login / Signup
                            </Link>
                        
                        <Divider />
                        <MenuItem onClick={handleClose}>Orders</MenuItem>
                        <MenuItem onClick={handleClose}>Wishlist</MenuItem>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Myntra Credit</MenuItem>
                        <MenuItem onClick={handleClose}>Coupons</MenuItem>
                        <MenuItem onClick={handleClose}>Saved Cards</MenuItem>
                        <MenuItem onClick={handleClose}>Saved Addresses</MenuItem>
                    </div>
                </Menu>
    )}
            </Button>

            <Link to='/wishlist' className={classes.wishlist}>
                <span className={classes.userIcon}><FavoriteBorderIcon style={{ color: 'grey' }} /></span>
                <span className={classes.usertitle}> Wishlist</span>
            </Link>

            <Link to='/bag' className={classes.bag}>
                <span><Badge badgeContent={cartItems.length} color="secondary">
                    <span className={classes.userIcon}><LocalMallOutlinedIcon style={{ color: 'grey' }} /></span>
                </Badge>
                </span>
                <span className={classes.usertitle}> Bag </span>
            </Link>
            
        </Box>
    )
}

export default HeaderButtons