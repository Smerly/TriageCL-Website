import React, { Component } from 'react';
import './App.css';
import Navbar1 from './Navbar1';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './MainPG/Main';
import MerchMain from './Merch/mainMerch';
import mainCoffee from './Coffee/mainCoffee';
import Footer from './Footer';
import Location from './Location/Location';
// import CartNav from './CartNav';
import Combine from './CartExtras/Combine';
import DataProvider from './CartExtras/Context';

function App() {
	return (
		<DataProvider>
			<div className="App">
				<Router>
					<Route exact path="/" component={Main} />
					<Route path="/merch" component={MerchMain} />
					<Route path="/beans" component={mainCoffee} />
					<Route path="/location" component={Location} />
					<Route path="/cart" component={Combine} />
					<Footer />
				</Router>
			</div>
		</DataProvider>
	);
}

// Image sources: https://www.pexels.com/photo/brown-and-black-coffee-beans-4815956/
//                https://www.pexels.com/photo/food-wood-dawn-people-6280321/

// const PAGE_PRODUCTS = 'products';
// const PAGE_CART = 'cart';
// function App() {
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
// 						<button onClick={() => addToCart(product)}> Add to cart </button>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);

// 	return (
// 		<div className="App">
// 			<Router>
// 				<Navbar1 />
// 			</Router>
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

export default App;
