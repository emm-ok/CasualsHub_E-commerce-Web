import { useState, useEffect } from 'react'
import ProductCard from '../components2/ProductCard'
import shopItemsData from '../Data'
import MyNavbar from './MyNavbar'

const ProductCards = ({ isHome = false }) => {
  
  const [cart, setCart] = useState(() => {
    const savedCartItems = localStorage.getItem('items');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart));
    // localStorage.clear();
  }, [cart])

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if(existingItem) {
        return prevCart.map((item) => 
          item.id === id ? {...item, quantity: item.quantity + 1} : item
        );
      }
      const newItem = shopItemsData.find((item) => item.id === id);
      return [...prevCart, { ...newItem, quantity: 1}]
    })

  }

  const increment = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? {...item, quantity: item.quantity + 1} : item
    )
    )
  }

  const decrement = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => {
        // item.id === id && item.quantity > 1 
        //   ? {...item, quantity: item.quantity - 1} 
        //   : item
        // ) 
        if(item.id === id && item.quantity === 1) {
          removeItem(id);
        }
        if(item.id === id && item.quantity > 0){
          return {...item, quantity: item.quantity - 1};
        } else {
          return item;
        }
      }
    )
  )
  }

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const clearCart = () => {
    setCart([]);
  }

  const totalItems = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id && item.quantity + 1
      )
    )
  }

  const checkOut = () => {
    alert(`You Total Purchase is ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
Thank you for your purchase`);
    // clearCart();
  }

  // const [itemsDisplayed, setItemsDisplayed] = useState([]);

  // useEffect(() => {
  //   const shuffledArray = (array) => {
  //     for(let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]]
  //     }
  //     return array;
  //   }

  // }, [isHome])
    
    const items = isHome ? shopItemsData.slice(0, 3) : [...shopItemsData];
  

  return (
    <>
      <MyNavbar 
        cart={cart}
        increment={increment}
        decrement={decrement} 
        removeItem={removeItem}
        clearCart={clearCart}
        checkOut={checkOut}
      />
      {isHome ? ( 
        <h1 className='text-5xl mt-40 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900 my-4 text-center p-2'>Trending</h1> 
      ) : (
        <h1 className='text-5xl mt-40 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900 my-4 text-center'>Our Products</h1>
      )}
      <div className='products mt-10 p-10 grid  md:grid-cols-2 lg:grid-cols-3 gap-10 bg-violet-200'>
        {items.map((product) => 
          <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img} 
              desc={product.desc}
              handleAddToCart={handleAddToCart}
              totalItems={totalItems}
              />
        )}
      </div>
    </>
  )
}

export default ProductCards