import { makeStyles, InputBase} from "@material-ui/core"; 
import  SearchIcon from '@material-ui/icons/Search';


const useStyle = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#F4F6F6',
        width: '35%',
        height: '50%',
        float: 'right',
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '20px',
        marginLeft: '20px',
        display: 'flex',
        color: 'black'
      },
      searchIcon: {
        padding: theme.spacing(2, 1),
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey'
      },
      inputRoot: {
        color: 'inherit',
        fontSize: '13px',
        width: '100%'
      },
      inputInput: {
        padding: 10,
      },
}))

const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for products,brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}

export default SearchBar;