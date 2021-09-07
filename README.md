# 📋 Sobre a entrega

O principal objetivo dessa aplicação, é simular um carrinho de compras. Você vai usar os diferentes conceitos abordados sobre React para isso. Porém, o maior foco dessa atividade é a manipulação do `state`.

# ℹ️ Informações úteis

## Resultado

![https://media0.giphy.com/media/KTqw0TQ5pqCWJMcBuv/giphy.gif](https://media0.giphy.com/media/KTqw0TQ5pqCWJMcBuv/giphy.gif)

# 🖖🏻 Mão na massa!

## Instruções

Exemplo de `state`:

    const [products, setProducts] = useState([
        { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
        { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
        { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
        { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
        { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
        { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
        { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
      ]); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([])const [cartTotal, setCartTotal] = useState(0)

Componentes para esta aplicação:

`App` - Responsável por centralizar os componentes e administrar o compartilhamento de informações por props;

`MenuContainer` - Responsável por renderizar a lista de produtos;

`Product` - Responsável por apresentar <span style="font-family: sans-serif; font-size: 1rem;">as informações do produto:</span> **nome, categoria** <span style="font-family: sans-serif; font-size: 1rem;">e</span> **preço**<span style="font-family: sans-serif; font-size: 1rem;">, além de um</span> `button` <span style="font-family: sans-serif; font-size: 1rem;">para adicionar ao carrinho.</span>

Funções para esta aplicação:

`showProducts` - R<span style="font-family: sans-serif; font-size: 1rem;">esponsável por filtrar (use o método</span> `filter`<span style="font-family: sans-serif; font-size: 1rem;">) e mostrar apenas os produtos</span> **com o mesmo** <span style="font-family: sans-serif; font-size: 1rem;">texto escrito no</span> `input;`

`handleClick` - Esta função deve receber por parâmetro o id e usar o método find para encontrar o item no array com o mesmo id do produto e será responsável por adicionar o produto selecionado no `state` `currentSale`; 

<span style="font-family: sans-serif; font-size: 1rem;"> </span>

1.  No componente `App`
    1.  Crie o `state` <span style="font-family: sans-serif; font-size: 1rem;">do exemplo;</span>
    2.  Importe o componente `<MenuContainer/>` e passe para ele o state por `props;`
    3.  Crie a função `showProducts;`
    4.  Crie a função `handleClick(productId)`.
    5.  Crie um elemento JSX e use o método reduce para mostra o total da venda.
2.  No componente `<MenuContainer />` 
    1.  Importe o componente `<Product />;`
    2.  Faça um map na lista de produtos que recebeu por props e retorne o product  

    3.  Passe cada elemento recebido como `props` para um componente `<Product />.`  

3.  No componente `<Product />`
    1.  Aqui você vai precisar da função handleClick (criada no componente App) e passe por parâmetro o id do produto atual que vai ser usado para adicionar ao carrinho.
    2.  Renderize a **categoria**, o **nome** e o **preço**, além de um `button` para adicionar ao carrinho;
4.  Faça deploy na vercel e envie o link :)

Aplique os conhecimentos de CSS para criar interfaces atrativas e dar destaque aos seus projetos. Perceba que sempre pode pensar na experiência do usuário e entregar mais que o solicitado, por exemplo, ajustar a pesquisa para o cliente usar letra minuscula ou maiúscula valoriza sua aplicação.

# 💡Conhecimentos aplicados:

*   Fundamentos do React
*   Deploy no Vercel
*   Componentização
*   Props
*   Import e export
*   Estilização
