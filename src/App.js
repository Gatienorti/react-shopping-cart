import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const ProductContext = createContext()
export const CartContext = createContext()

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		return(item.id && setCart([...cart,item]))
		// add the given item to the cart
	};
	const removeItem = (id) => {
		console.log(cart)
		setCart([...cart].filter(item => item.id !== id))
	}
	
	return (
		<div className="App">
		<ProductContext.Provider value={[products, addItem]}>
			<CartContext.Provider value={[cart, removeItem]}>
				<Navigation/>

				{/* Routes */}
				<Route exact path="/">
					{/* <Products products={products} addItem={addItem} /> */}
					<Products/>
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</ProductContext.Provider>
		</div>
		
	);
}

export default App;
