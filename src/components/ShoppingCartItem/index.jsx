import { makeStyles, Avatar, Divider, IconButton, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: pink[500],
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
  },
  title: {
    fontFamily: 'Roboto Slab',
    fontSize: 18,
    color: '#502314',
    marginLeft: 5,
  },
  price: {
    fontFamily: 'Roboto Slab',
    fontSize: 18,
    color: '#502314',
  },
  flex: {
    display: 'flex',
  }
}));

const ShoppingCartItem = ({ product: { id, name, price, quantity }, removeSale }) => {
  const classes = useStyles();

  return (
    <>
      <MenuItem>
        <div className={ classes.item }>
          <div className={ classes.product }>
            <Avatar className={ classes.avatar }>{ quantity }</Avatar>
            <h2 className={ classes.title }>{ name }</h2>
          </div>
          <div className={ classes.flex }>
            <h2 className={ classes.price }>{ (price * quantity).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</h2>
            <IconButton
              color="secondary"
              aria-label="remove item"
              component="span"
              onClick={ () => removeSale(id) }
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </MenuItem>
      <Divider variant='middle' />
    </>
  );
};

export default ShoppingCartItem;