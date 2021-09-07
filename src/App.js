import { useEffect, useMemo, useState, React } from 'react';
import AppToolsBar from './components/AppToolsBar';
import Category from './components/Category';
import MenuContainer from './components/MenuContainer';
import Warning from './components/Warning';
import './App.css';

function App() {
  const products = useMemo(() => [
    {
      id: 1,
      name: 'Hambúrguer',
      description: 'Pão com gergelim, um saboroso hambúrguer de pura carne bovina, duas fatias de picles, ketchup e mostarda.',
      category: 'Hambúrgueres',
      image: '/img/hamburguer.png',
      price: 7.99,
    },
    {
      id: 2,
      name: 'Cheeseburger',
      description: 'Pão com gergelim, um saboroso hambúrguer de pura carne bovina, uma fatia de queijo derretido, duas fatias de picles, ketchup e mostarda.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger.png',
      price: 8.99,
    },
    {
      id: 3,
      name: 'Cheeseburger Duplo',
      description: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger_duplo.png',
      price: 10.99,
    },
    {
      id: 4,
      name: 'Cheeseburger Salada',
      description: 'Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, queijo derretido e um suculento hambúrguer de pura carne bovina.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger_salada.png',
      price: 10.99,
    },
    {
      id: 5,
      name: 'Cheeseburger Salada Duplo',
      description: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, quatro fatias de picles, alface, tomate, cebola, maionese e ketchup.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger_salada_duplo.png',
      price: 12.99,
    },
    {
      id: 6,
      name: 'Cheeseburger Bacon',
      description: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, quatro fatias de picles, alface, tomate, cebola, maionese e ketchup.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger_bacon.png',
      price: 11.99,
    },
    {
      id: 7,
      name: 'Cheeseburger Bacon Duplo',
      description: 'Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, duas fatias de picles, ketchup e mostarda.',
      category: 'Hambúrgueres',
      image: '/img/cheeseburger_bacon_duplo.png',
      price: 13.99,
    },
    {
      id: 8,
      name: 'Veggie Burger',
      description: 'Pão integral, um delicioso e suculento empanado super crocante, feito de batata e champignon, recheado com shimeji, shitake e muito queijo.',
      category: 'Hambúrgueres',
      image: '/img/veggie_burger.png',
      price: 15.99,
    },
    { 
      id: 9,
      name: 'Pepsi',
      description: 'Refrigerante Pepsi Cola',
      category: 'Bebidas',
      image: '/img/pepsi.png',
      price: 4.99
    },
    { 
      id: 10,
      name: 'Guaraná',
      description: 'Refrigerante Guaraná Antárctica',
      category: 'Bebidas',
      image: '/img/guarana.png',
      price: 4.99
    },
    { 
      id: 11,
      name: 'Suco de laranja',
      description: 'Delicioso suco natural de laranja',
      category: 'Bebidas',
      image: '/img/laranja.png',
      price: 6.99
    },
    { 
      id: 12,
      name: 'Suco de uva',
      description: 'Delicioso suco natural de uva',
      category: 'Bebidas',
      image: '/img/uva.png',
      price: 6.99
    },
  ], []);

  const [ filteredProducts, setFilteredProducts ] = useState(products);
  const [ currentSale, setCurrentSale ] = useState([]);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ finalizedSale, setFinalizedSale ] = useState(false);

  const showProducts = (searchText) => {
    if (searchText.trim() !== '' && searchText.length > 2) {
      setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleClick = (productId, quantity) => {
    const currentProduct = products.filter(product => product.id === productId)[0];
    currentProduct.quantity = quantity;

    setCurrentSale([...currentSale.filter(product => product.id !== productId), currentProduct]);
  };

  const removeSale = (productId) => {
    setCurrentSale([...currentSale.filter(product => product.id !== productId)]);
  };

  useEffect(() => {
    if (currentSale.length > 0) {
      setCartTotal(currentSale.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0));
    } else {
      setCartTotal(0);
    }
  }, [ currentSale ]);

  useEffect(() => {
    if (finalizedSale) {
      setFilteredProducts(products);
      setCurrentSale([]);
      setCartTotal(0);
      setFinalizedSale(false);
    }
  }, [ finalizedSale, products ]);

  return (
    <>
      <header>
        <AppToolsBar showProducts={ showProducts } currentSale={ currentSale } cartTotal={ cartTotal } setFinalizedSale={ setFinalizedSale } removeSale={ removeSale } />
      </header>

      <main>
        <Category>Hambúrgueres</Category>
        { filteredProducts.some(product => product.category === 'Hambúrgueres') ?
          (
            <MenuContainer 
              products={ filteredProducts.filter(product => product.category === 'Hambúrgueres') }
              handleClick={ handleClick }
              finalizedSale = { finalizedSale }
              currentSale={ currentSale }
            />
          ) : (
            <Warning>hambúrguer</Warning>
          )
        }
        <Category>Bebidas</Category>
        { filteredProducts.some(product => product.category === 'Bebidas') ?
          (
            <MenuContainer 
              products={ filteredProducts.filter(product => product.category === 'Bebidas') }
              handleClick={ handleClick }
              finalizedSale = { finalizedSale }
              currentSale={ currentSale }
            />
          ) : (
            <Warning>bebida</Warning>
          )
        }
      </main>
    </>
  );
}

export default App;