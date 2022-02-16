import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/data";
import { Box, Divider, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyle = makeStyles({
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    },

    unbelievableImage: {
        position: 'absolute',
        //top: 0,
        //bottom: 0,
        left: 0,
        right: 0,
        height: 'auto',
        width: '100%',
        transitionProperty: 'all',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '0s'
    },

    wrapper: {
        padding: '40px 135px',
        marginTop: '100px'
    },

    // carousel1: {
    //     top: '0px'
    // },

    image: {
        width: 'auto',
        height: 310
    }
})

const Slide = ({ title }) => {
    const classes = useStyle();
    return (
        <Link to='/products' className={classes.component}>
            <Box className={classes.deal}>
                <img className={classes.unbelievableImage}
                    src={title}
                    alt="Unbelievable-Deals">
                </img>
            </Box>
            
            <Carousel
                //className={classes.carousel1}
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <Box className={classes.wrapper}>
                            <img src={product.url} className={classes.image} alt="Products in slide" />
                        </Box>
                    ))
                }
            </Carousel>
            <Divider />
        </Link>
    )
}

export default Slide;
