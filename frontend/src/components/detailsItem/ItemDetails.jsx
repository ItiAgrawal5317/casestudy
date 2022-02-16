import { Box, makeStyles, Typography, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductDetails } from "../../redux/actions/productAction";
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from 'clsx'

import ActionItems from "./ActionItems";

const useStyle = makeStyles({
    component: {
        marginTop: 80,
        background: '#f2f2f2'
    },

    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    rightContainer: {
        marginTop: 40,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 8
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontWeight: 700
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: 'crimson'
    }
})

const ItemDetails = ({ match }) => {
    const classes = useStyle();

    const productDetails = useSelector(state => state.getProductDetails);
    const { product, loading } = productDetails;

    const dispatch = useDispatch();

    const date = new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000));

    useEffect(() => {
        if (product && match.params.id !== product.id)
            dispatch(getProductDetails(match.params.id));
    }, [dispatch,product,match,loading])

    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{ minWidth: '40%' }}>
                        <ActionItems product={product} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{product.title}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}> 5 Ratings & 3 Reviews</Typography>
                        <Typography style={{ fontSize: 20 }}>
                            <span className={classes.price}>Rs. {product.price.cost}</span> &nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>Rs. {product.price.mrp}</strike></span> &nbsp;&nbsp;
                            <span style={{ color: 'green', fontWeight: 700 }}>{product.discount}</span>
                        </Typography>

                        <Typography style={{ marginTop: 20, fontWeight: 'bold' }}> BEST OFFERS </Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge} />This product is already at its best price</Typography>
                            <Typography><Badge className={classes.badge} />10% Instant Savings on Citi Credit and Debit Cards</Typography>
                            <Typography><Badge className={classes.badge} />Min spend Rs 3,000; Max discount Rs 1,000. TCA</Typography>
                            <Typography><Badge className={classes.badge} />Get extra 15% off (price inclusive of discount)</Typography>
                        </Box>
                        <br />

                        <Typography style={{ fontWeight: 'bold' }}> DELIVERY OPTIONS  </Typography>
                        <Box className={classes.smallText}>
                            <Typography>100% Original Products</Typography>
                            <Typography>Pay on delivery might be available</Typography>
                            <Typography>Easy 15 days returns and exchanges</Typography>
                            <Typography>Try & Buy might be available</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{ fontWeight: 700 }}>{date.toDateString()}</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{ color: '#FF3366' }}> SupperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>10 Days Return Policy</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            }
        </Box>

    )
}

export default ItemDetails;