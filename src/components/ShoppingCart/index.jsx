import { useEffect, useRef, useState } from 'react';
import { makeStyles, Badge, IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartList from '../ShoppingCartList';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  iconColor: {
    color: '#f2e5d4',
  },
}));

const ShoppingCart = ({ currentSale, cartTotal, setFinalizedSale, removeSale }) => {
  const [ salesCount, setSalesCount ] = useState(0);
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    if (currentSale.length > 0) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [ open ]);

  useEffect(() => {
    setSalesCount(currentSale.length);
  }, [ currentSale ]);

  useEffect(() => {
    if (cartTotal === 0) {
      setOpen(false);
    }
  }, [ cartTotal ]);
  
  return (
    <>
      <IconButton
        className={ classes.margin }
        ref={ anchorRef }
        aria-label='shopping cart'
        aria-controls={ open ? 'menu-list-grow' : undefined }
        aria-haspopup='true'
        onClick={ handleToggle }
      >
        <Badge badgeContent={ salesCount } color='secondary'>
          <ShoppingCartIcon className={ classes.iconColor } fontSize='large' />
        </Badge>
      </IconButton>
      <ShoppingCartList
        currentSale={ currentSale }
        cartTotal={ cartTotal }
        open={ open }
        anchorRef={ anchorRef }
        handleClose={ handleClose }
        handleListKeyDown={ handleListKeyDown }
        setFinalizedSale={ setFinalizedSale }
        removeSale={ removeSale }
      />
    </>
  );
};

export default ShoppingCart;