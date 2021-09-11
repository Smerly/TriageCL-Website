// import { useState } from 'react';
// import { HashRouter as Router, Route } from 'react';
// import Navbar1 from './Navbar1';

// import React from 'react';
// const PAGE_PRODUCTS = 'products';
// const PAGE_CART = 'cart';

// function CartNav() {
// 	const [cart, setCart] = useState([PAGE_CART]);
// 	const [page, setPage] = useState(PAGE_PRODUCTS);
// 	const [products] = useState([
// 		{
// 			name: 'Standard T-Shirt',
// 			cost: '$29.99',
// 			image: '',
// 		},
// 		{
// 			name: 'Inverse Tote Bag',
// 			cost: '$19.99',
// 			image: '',
// 		},
// 	]);

// 	const renderProducts = () => (
// 		<>
// 			<h1> Products </h1>
// 			<div>
// 				{products.map((product, idx) => (
// 					<div key={idx}>
// 						<h3> {product.name} </h3>
// 						<h4> {product.cost} </h4>
// 						<img src={product.image} alt={product.name} />
// 						<button onClick={() => addToCart(product)}> Add to cart </button>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);

// 	const addToCart = (product) => {
// 		setCart([...cart, { ...product }]);
// 	};

// 	const removeFromCart = (productToRemove) => {
// 		setCart(cart.filter((product) => product !== productToRemove));
// 	};

// 	const navigateTo = (nextPage) => {
// 		setPage(nextPage);
// 	};

// 	const renderCart = () => (
// 		<>
// 			<h1> Cart </h1>
// 			<div>
// 				{cart.map((product, idx) => (
// 					<div key={idx}>
// 						<h3> {product.name} </h3>
// 						<h4> {product.cost} </h4>
// 						<img src={product.image} alt={product.name} />
// 						<button onClick={() => removeFromCart(product)}>
// 							{' '}
// 							RemoveFromCart{' '}
// 						</button>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);

// 	return (
// 		<div>
// 			<Navbar1 />

// 			<header>
// 				<button onClick={() => navigateTo(PAGE_CART)}>
// 					{' '}
// 					Go to Cart ({cart.length}){' '}
// 				</button>

// 				<button onClick={() => navigateTo(PAGE_PRODUCTS)}>
// 					{' '}
// 					Go to Products
// 				</button>
// 			</header>

// 			{page === PAGE_PRODUCTS && renderProducts()}
// 			{page === PAGE_CART && renderCart()}
// 		</div>
// 	);
// }

// // class CartNav extends React.Component {
// // 	render() {
// // 		return <div></div>;
// // 	}
// // }

// export default CartNav;
