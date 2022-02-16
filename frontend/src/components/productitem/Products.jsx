
import "react-multi-carousel/lib/styles.css";
//import { productitems } from "../../constants/data";
import { Box, Divider, makeStyles, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productAction";

//import { productitems } from "../../constants/data";

const useStyle = makeStyles({
  component: {
    background: '#FFFFFF',
    display: 'flex',
    webkitBoxOrient: 'horizontal',
    webkitBoxDirection: 'normal',
    flexDirection: 'row',
    flexWrap: 'wrap',
    webkitBoxAlign: 'stretch',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: "100%",
    margin: '0 -10px 0 3px',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between'
    //maxWidth: '50em'
  },

  wrapper: {
    padding: '3em',
    margin: '0 0px 30px 0px',
    width: '300px',
    textAlign: 'left',
    position: 'relative',
    verticalAlign: 'top',
    overflow: 'hidden',
    display: 'inline-block',
    boxSizing: 'border-box'
  },

  text: {
    fontSize: 14,
    marginTop: 5
  },

  image: {
    width: 'auto',
    height: 310
  },

  // buy: {
  //   backgroundColor: "#04AA6D",
  //   color: "white",
  //   margin: '10px',
  //   padding: "5px 15px",
  //   border: "none",
  //   textDecoration: 'none',
  //   textTransform: 'none',
  //   borderRadius: "2px",
  //   cursor: "pointer",
  //   "&:hover": {
  //     backgroundColor: "#45a049",
  //   },
  // },

  // view: {
  //   backgroundColor: "darkorange",
  //   color: "white",
  //   padding: "5px 15px",
  //   border: "none",
  //   margin: '10px',
  //   textDecoration: 'none',
  //   textTransform: 'none',
  //   borderRadius: "2px",
  //   cursor: "pointer",
  //   "&:hover": {
  //     backgroundColor: "#45a049",
  //   },
  // }
})

const Products = ({ title }) => {
  const classes = useStyle();

  const { products } = useSelector(state => state.getProducts)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  //const [data,setData]=useState({});
  // const productitems = axios("http://localhost:8082/getProduct", {
  //         method: "GET",
  //     }).then(function (response) {
  //         if(response.status===200){
  //             console.log(response);
  //  setData(response.data)          
  //         }else {
  //             alert(response.data);
  //         }
  //       }).catch(function (response) {
  //         alert("Product not found.....");
  //     })
  //     const getAllProduct = () => {
  //       axios.get(`http://localhost:8082/getProduct`,{
  //       }).then(
  //         (response) => {
  //           console.log(response);
  //           setProduct(response.data)
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //   };
  //   useEffect(() => {
  //     getAllProduct()
  //   },[]);

  //     const [product, setProduct] = useState([]);
  return (
    <Box className={classes.component}>

      {
        products.map((product) => (
          <Link to= {`product/${product.id}`}>
          <Box className={classes.wrapper}>
            <img src={product.url} className={classes.image} alt="Products in slide" />
            <Typography className={classes.text} style={{ fontWeight: 600, fontSize: '17px', color: '#212121' }}>{product.brand}</Typography>
            <Typography className={classes.text} style={{ color: '#AF0E0E' }}>{product.title}</Typography>
            <Typography className={classes.text} style={{ color: '#F39C12' }}>{product.discount}</Typography>
            <Typography className={classes.text} style={{ fontWeight: 600, color: '#0B5345', display: 'flex' }}>Rs. {product.price.cost}
              <Typography style={{ color: '#0B5345', textDecorationLine: 'line-through', fontSize: '14px', textIndent: '5px' }}>Rs. {product.price.mrp}</Typography>
            </Typography>
            {/* <div style={{ display:'flex'}}>
                        <Link to='/bookproduct'
                  variant="contained"
                  className={classes.buy}
                  //onClick={submitForm}
                >Buy Now
                </Link>
                <Link to='/wishlist'
                  variant="contained"
                  className={classes.view}
                  //onClick={submitForm}
                >
                  WishList
                </Link>
                </div> */}
          </Box>
          </Link>
        ))
      }

      <Divider />
    </Box>
  )
}

export default Products;