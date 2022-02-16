import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(
    {
        wrapper: {
            width: '93%',
            marginTop: '20px',
            marginLeft: '52px'
        }
    }
)

const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    //const giveIndia = () => {return 'https://www.giveindia.org/' }
    return (
        <a href="https://www.giveindia.org/" >
            <img className={classes.wrapper} src={coronaURL}  alt="Corona" />
        </a>
    )
}

export default MidSection;