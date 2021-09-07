import '@fontsource/roboto-slab';
import { makeStyles, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { Add, AddShoppingCart, Remove } from '@material-ui/icons';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(() => ({
  media: {
    paddingTop: '56.25%',
    backgroundColor: '#f2e5d4',
  },
  title: {
    fontFamily: 'Roboto Slab',
    fontWeight: 'fontWeightBold',
    textAlign: 'center',
    color: '#502314',
  },
  quantity: {
    fontSize: 20,
    color: 'rgb(0 0 0 / 54%)',
  },
  addButton: {
    width: '100%',
    marginLeft: 5,
  },
  buttonElements: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    fontWeight: 'bold',
  },
}));

const Product = ({ product: { id, name, description, image, price }, handleClick, finalizedSale, isInShoppingCart }) => {
  const classes = useStyles();

  const [ quantity, setQuantity] = useState(1);
  const [ saleQuantity, setSaleQuantity ] = useState(0);
  const [ isDecreaseQuantityButtonDisabled, setIsDecreaseQuantityButtonDisabled ] = useState(true);
  const [ isAddShoppingCartButtonDisabled, setIsAddShoppingCartButtonDisabled ] = useState(false);
  const [ total, setTotal ] = useState(price);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const addProductToShoppingCart = () => {
    setSaleQuantity(quantity);
    setIsAddShoppingCartButtonDisabled(true);
    handleClick(id, quantity);
  };

  useEffect(() => {
    setIsDecreaseQuantityButtonDisabled(quantity > 1 ? false : true);
    setIsAddShoppingCartButtonDisabled(saleQuantity > 0 && saleQuantity === quantity);
    setTotal(quantity * price);
  }, [ quantity, saleQuantity, price ]);

  useEffect(() => {
    if (finalizedSale) {
      setQuantity(1);
      setSaleQuantity(0);
      setIsDecreaseQuantityButtonDisabled(true);
      setIsAddShoppingCartButtonDisabled(false);
      setTotal(price);
    }
  }, [ finalizedSale, price ]);

  useEffect(() => {
    if (!isInShoppingCart) {
      setIsAddShoppingCartButtonDisabled(false);
    }
  }, [ isInShoppingCart ]);

  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
      <Card>
        <CardMedia className={ classes.media } image={ image } title={ name } />

        <CardContent>
          <h2 className={ classes.title }>{ name }</h2>

          <Typography variant='body2' color='textSecondary' component='p'>
            { description }
          </Typography>
        </CardContent>

        <Divider variant='middle' />

        <CardActions disableSpacing>
          <IconButton
            onClick={ decreaseQuantity }
            color='secondary'
            disabled={ isDecreaseQuantityButtonDisabled }
            aria-label='decrease quantity'
          >
            <Remove />
          </IconButton>

          <span className={ classes.quantity }>{ quantity }</span>

          <IconButton
            onClick={ increaseQuantity }
            color='secondary'
            aria-label='increase quantity'
          >
            <Add />
          </IconButton>

          <Button
            className={ classes.addButton }
            variant='contained'
            color='secondary'
            disabled={ isAddShoppingCartButtonDisabled }
            onClick={ addProductToShoppingCart }
          >
            <div className={ classes.buttonElements }>
              <AddShoppingCart />
              <span className={ classes.price }>
                { total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
              </span>
            </div>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;