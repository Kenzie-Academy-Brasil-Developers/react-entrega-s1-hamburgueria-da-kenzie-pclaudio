import { Grid } from '@material-ui/core';
import Product from '../Product';

const MenuContainer = ({ products, handleClick, finalizedSale, currentSale }) => {

  return (
    <Grid container direction='row' alignItems='center' spacing={ 2 }>
      {products.map((product) => (
        <Product
          key={ product.id }
          product={ product }
          handleClick={ handleClick }
          finalizedSale = { finalizedSale }
          isInShoppingCart={ currentSale.some(currentProduct => currentProduct.id === product.id) }
        />
      ))}
    </Grid>
  );
};

export default MenuContainer;