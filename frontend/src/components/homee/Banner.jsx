// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from 'react-responsive-carousel'
// import { bannerData } from '../../constants/data';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    // image: {
    //     width: '100%'
    // }

    container: {
        margin: '0px auto 0px auto'
    },

    rowBase: {
        //display:'-webkit-flex',
        display: 'flex',
        webkitBoxOrient: 'horizontal',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        webkitBoxPack: 'start',
        justifyContent: 'flex-start',
        webkitBoxAlign: 'stretch',
        alignItems: 'stretch',
        alignContent: 'stretch',
        webkitBoxDirection: 'normal'
    },

    columnBase: {
        webkitBoxDirection: 'normal',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        webkitBoxOrient: 'vertical',
        flexDirection: 'column',
        //webkitBoxFlex: 1,
        flex: '1 1 0%'
    },

    containerBase: {
        boxSizing: 'border-box',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
    },

    saleImage: {
        position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 'auto',
        width: '100%',
        display: 'block',
        transitionProperty: 'all',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '0s'
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        // <Carousel 
        // autoPlay={true}
        // animation = 'slide'
        // indicators={false}
        // navButtonAlwaysVisible={true}
        // cycleNavigatio={true}>
        //     {
        //         bannerData.map(image => (
        //             <img src={image} alt='Carousel of Myntra Offer' 
        //             className={classes.carouselImg}/>
        //         ))
        //     }
        // </Carousel>
        <Box>
            <div className="Banner1" style={{ boxSizing: 'inherit' }}>
                <div className={classes.containerBase} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div>
                        <div className={classes.container}>
                            <div className={classes.rowBase}>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/2d685f76-a014-4642-a589-d5a10ba97a891639748899132-Banner_02.jpg"
                                                    alt="80% Off"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/14d56e64-5869-49ef-991f-b5e5b3c8d3481639748899139-Banner_03.jpg"
                                                    alt="sale part 1"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>
                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/bf10cd9e-7218-4527-8489-4f8beff972231639748899145-Banner_04.jpg"
                                                    alt="sale part 2"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/f514b31a-6c5b-45b5-a0e7-79703855535c1639748899151-Banner_05.jpg"
                                                    alt="Half Price"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Banner2">
                <div className={classes.mainContainer} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div>
                        <div className={classes.container}>
                            <div className={classes.rowBase}>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/68355553-0e02-4940-bdb6-a6923c2edc2b1639748899158-Banner_06.jpg"
                                                    alt="70% Off"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/2962d55e-0a76-4063-a388-c24c4cc9027f1639748899165-Banner_07.jpg"
                                                    alt="sale part 3"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/edb4f25a-a39c-4049-ad1e-8922e96ad0ce1639748899172-Banner_08.jpg"
                                                    alt="sale part 4"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/c76717e9-147e-45c8-a92d-1a7c7a9038e51639748899179-Banner_09.jpg"
                                                    alt="Styles Under 499"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Banner3">
                <div className={classes.mainContainer} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div>
                        <div className={classes.container}>
                            <div className={classes.rowBase}>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/c3de6865-6706-4b28-a4d8-2fbe777d5bd01639748899184-Banner_10.jpg"
                                                    alt="60% Off"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/9593b02f-2f59-4c1d-a8f8-cdf01f5e3ef71639748899190-Banner_11.jpg"
                                                    alt="sale part 5"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/77f5df50-48a6-425d-b275-3b2653f849761639748899196-Banner_12.jpg"
                                                    alt="sale part 6"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.columnBase}>
                                    <div className={classes.containerBase}>
                                        <div className={classes.rowBase}>
                                            <div className={classes.columnBase}>

                                                <img className={classes.saleImage}
                                                    src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/17/02a3c36d-07ab-49e5-984c-2a2de04c061e1639728775790-Banner_13.jpg"
                                                    alt="500 Off"></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Box>
    )
}

export default Banner;