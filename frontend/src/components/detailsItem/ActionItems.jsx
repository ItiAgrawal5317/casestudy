import { Box, Button, makeStyles } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import clsx from "clsx";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    leftContainer: {
        padding: '40px 0 0 80px'
    },
    image: {
        padding: '10px 20px',
        border: '1px solid #f0f0f0',
        width: "75%"
    },
    button: {
        height: 46,
        width: "36%",
        border: '1px solid black',
        borderRadius: '4px'
    },
    addToCart: {
        background: 'crimson',
        color: 'white',
        marginRight: '14px',
        "&:hover": {
               backgroundColor: "crimson",
        }
    },
    wishlist: {
        background: 'white',
        color: 'black'
    }
})


const ActionItems = ({ product }) => {

    const classes = useStyle();
    const history = useHistory();

    const dispatch = useDispatch();

    const addItemsToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/bag')
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.url} className={classes.image}></img>
            {/* <Link to = "/bookproduct" style={{textDecoration: 'none'}}> */}
            <br />
            <Button
            onClick={() => addItemsToCart()}
            className={clsx(classes.button, classes.addToCart)}>
                <LocalMallOutlinedIcon style={{ color: 'white' }} />&nbsp;
                ADD TO BAG
            </Button>
            {/* </Link> */}
            <Link to = "/wishlist" style={{textDecoration: 'none'}}>
            <Button 
            className={clsx(classes.button, classes.wishlist)}>
                <FavoriteBorderIcon style={{ color: 'grey' }} />&nbsp;
                WISHLIST
            </Button>
            </Link>
        </Box>

    )
}

export default ActionItems;