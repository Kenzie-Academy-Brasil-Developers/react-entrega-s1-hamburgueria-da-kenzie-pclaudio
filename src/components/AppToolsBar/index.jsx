import { fade, makeStyles, AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ShoppingCart from '../ShoppingCart';
import '@fontsource/fugaz-one';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    borderRadius: 8,
  },
  toolbar: {
    backgroundColor: '#502314',
    borderRadius: 8,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Fugaz One',
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  iconColor: {
    color: '#f2e5d4',
  },
}));

const AppToolsBar = ({ showProducts, currentSale, cartTotal, setFinalizedSale, removeSale }) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <AppBar className={ classes.appbar } position='static'>
        <Toolbar className={ classes.toolbar }>
          <Typography className={ classes.title } variant='h6' noWrap>
            Kenzie Burger
          </Typography>

          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <Search className={ classes.iconColor } />
            </div>
            <InputBase
              placeholder='Pesquisar…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={ (event) => showProducts(event.target.value) }
            />
          </div>

          <ShoppingCart currentSale={ currentSale } cartTotal={ cartTotal } setFinalizedSale={ setFinalizedSale } removeSale={ removeSale } />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppToolsBar;