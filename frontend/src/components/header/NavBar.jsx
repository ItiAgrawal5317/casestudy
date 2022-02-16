
import { navData } from "../../constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    navbar: {
        display: 'flex',
        color: 'black',
        float: 'left',
        lineHeight: '80px',
        height: '80px',
        margin: '0 0 0 3.5%'
    },

    content: {
        border: 'hidden',
        display: 'flex',
        float: 'left',
        textAlign: 'center'
    },
    navLink: {
        display: 'flex'
    },

    category:{
        padding: '28px 17px 28px 17px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '14px',
        letterSpacing: '.3px',
        color:'#282c3f',
        borderBottom: 'none',
        fontWeight: 600,
        textTransform: 'uppercase',
        '&:hover':{
            cursor: 'pointer',
            borderBottom: '3px solid #f637b4',
        }
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <nav className={classes.navbar}>
            <Box className={classes.navLinks}>
                <Box className={classes.content }>
                    {
                        navData.map(data => (
                            <Box className={classes.navLink}>
                                <Typography className={classes.category}>{data.text}</Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </nav>
    )
}

export default NavBar;