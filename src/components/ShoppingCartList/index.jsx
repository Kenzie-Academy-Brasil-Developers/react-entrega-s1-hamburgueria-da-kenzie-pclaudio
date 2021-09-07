import { useState } from 'react';
import { makeStyles, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import ShoppingCartItem from '../ShoppingCartItem';
import ShoppingDialog from '../ShoppingDialog';

const useStyles = makeStyles((theme) => ({
  finalizeSale: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  spaceBetween: {
    marginRight: 10,
  },
}));

const ShoppingCartList = ({ currentSale, cartTotal, open, anchorRef, handleClose, handleListKeyDown, setFinalizedSale, removeSale }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [ orderNumber, setOrderNumber ] = useState(Math.floor(Math.random() * 10000));

  const handleClickOpen = () => {
    setOpenDialog(true);
    setFinalizedSale(true);
    setOrderNumber(Math.floor(Math.random() * 10000));
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Popper
        open={ open }
        anchorEl={ anchorRef.current }
        role={ undefined }
        transition
        disablePortal
      >

        {({ TransitionProps, placement }) => (
          <Grow
            { ...TransitionProps }
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={ handleClose }>
                <MenuList autoFocusItem={ open } id='menu-list-grow' onKeyDown={ handleListKeyDown }>
                  { currentSale.map(product => <ShoppingCartItem key={ product.id } product={ product } removeSale={ removeSale } />) }
                  <MenuItem key={ 99999 }>
                    <Button className={ classes.finalizeSale } onClick={ handleClickOpen } variant="contained" color="secondary">
                      <div className={ classes.flex }>
                        <div className={ classes.spaceBetween }>
                          Finalizar pedido
                        </div>
                        <div>
                          { cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
                        </div>
                      </div>
                    </Button>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}

      </Popper>
      <ShoppingDialog openDialog={ openDialog } handleClickClose={ handleClickClose } orderNumber={ orderNumber } />
    </>
  );
};

export default ShoppingCartList;