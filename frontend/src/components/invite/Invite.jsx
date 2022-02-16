import {Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    border: {
        maxWidth: '100%',
        width: '100%',
        //height: '50px',
        margin: 'auto',
        position: 'relative',
        boxShadow: '0 2px 12px 0 rgb(0 0 0 / 4%)',
        textAlign: 'center',
        backgroundColor: '#dee8ff'
    },

    innerContent: {
        position: 'relative',
        backgroundOrigin: 'linear-gradient(90deg, #f9f9ff, #dee8ff)',
        margin: 'auto'
    },

    bannerSeperation: {
        marginLeft: '45px',
        marginRight: '43px',
        color: '#d4d5d9',
        fontSize: '24px',
        display: 'none',
        verticalAlign: 'middle'
    },

    invitationImg: {
        display:'flex'
    },

    bannerImg:{
        width: '54px',
        verticalAlign: 'middle',
        marginRight: '8px',
        marginLeft: '520px'
    },

    inviteMsg: {
        verticalAlign: 'middle',
        fontSize: '14px',
        color: 'black',
        fontWeight: 700,
        opacity: .9,
        textAlign: 'left',
        padding: '0 8px',
        width: '300px',
        marginTop: '6px'
    },

    inviteBtn: {
        borderRadius: '4px',
        border: '1px solid #c9dafd',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '.3px',
        textAlign: 'center',
        height: '27px',
        lineHeight: '1.25em',
        color: '#ff3f6c',
        background: '0 0',
        padding: '1px 5px 0 8px',
        marginTop: '10px'
    },

    inviteBtnPadding:{
        paddingLeft: '4px',
        paddingRight: '4px'
    },

    arrow:{
        display: 'inline-block',
        width: '4px',
        height: '4px',
        marginLeft: '2px',
        border: 'solid #ff3e6c',
        borderWidth: '2px 2px 0 0',
        transform: 'rotate(45deg)',
        marginBottom: '1px',
        marginRight: '2px'
    }
})

const Invite = () => {
    const classes = useStyles();
    const inviteURL = "https://constant.myntassets.com/pwa/assets/img/rupee_illustration.png";
    return(      
        <div className= {classes.border} style= {{top:'82px'}}>
            <div className= {classes.innerContent}>
                <span className={classes.bannerSeperation}></span>
                <div className= {classes.invitationImg}>
                    <img className={classes.bannerImg} src= {inviteURL} alt="Invitation Logo of Myntra "></img>
                    <div className={classes.inviteMsg}>Invite friends to Myntra’s EORS & get up to ₹200 MynCash for every person who visits
                    </div>
                    <Link to='/invitenow' style={{textDecoration:'none'}}>
                    <Button className={classes.inviteBtn}>
                        <span className={classes.inviteBtnPadding}>INVITE NOW
                            <span className={classes.arrow}></span>
                        </span>
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Invite;