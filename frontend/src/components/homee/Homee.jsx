import { Box, makeStyles } from "@material-ui/core"
//Import Components
import Banner from "./Banner"
import Invite from "../invite/Invite"
import Slide from "./Slide"
import MidSection from "./MidSection"

const useStyle = makeStyles({
    component: {
        paddingTop: '130px',
        color: 'inherit',
        display: 'block'
    }
})


const Homee = () => {
    const classes = useStyle();
    return (
        <Box>
            <Invite />
            <Box className={classes.component}>
                <Banner />
                <MidSection />
                <Box>
                    <Slide
                        title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/0d143602-f83c-4663-b2f6-38267e99e5b71639645500939-Unbelievable-Deals.jpg" />
                </Box>       
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/a60b8a0e-da9f-4420-b332-88f37781e2611639645500904-Most-Loved-Brands.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/dada550a-1832-4547-8762-f4eb640e6b9d1639645500839-Best-Of-Clothing.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/b7f4ce1f-a266-4ece-8563-bdbaf2609ebb1639645500859-Best-Of-Innerwear-_-Loungewear.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/7b277d19-155d-4340-83e8-e16abb0e02161639645500831-Best-Of-Accessories-_-Gadgets.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/3215ceb1-8fae-4403-af41-72706644101a1639645500916-Shop-By-Category.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/2a96ea6f-2587-4a2d-b128-7dcfb3587ddc1639645500846-Best-Of-Footwear.jpg" />
                <Slide
                    title="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/16/70e89ea3-1373-4418-b065-0c3e29a9eb5a1639645500868-Best-Of-Kids-Wear.jpg" />
            </Box>
        </Box>

    )
}

export default Homee