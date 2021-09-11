import React, { Component } from 'react';

export const DataContext = React.createContext();

// This is where the data for the products and API is made. Also where all the functions are written

class DataProvider extends Component {
	state = {
		products: [
			{
				_id: '1',
				title: 'Standard Triage Tee',
				img:
					'https://cdn.discordapp.com/attachments/584882522211483754/798339545019449364/Shirt1.png',
				price: 29.99,
			},

			{
				_id: '2',
				title: 'Triage Inverse Tote Bag',
				img:
					'https://cdn.discordapp.com/attachments/584882522211483754/798339519463161866/toteinverse.png',
				price: 19.99,
			},
		],
		cart: [],
		total: 0,
	};

	removeCart = (id) => {
		const { cart } = this.state;
		cart.forEach((item, index) => {
			if (item._id === id) {
				cart.splice(index, 1);
			}
		});
		this.setState({ cart: cart });
	};

	addCart = (id) => {
		const { products, cart } = this.state;
		const check = cart.every((item) => {
			return item._id === id;
		});

		const data = products.filter((product) => {
			return product._id === id;
		});
		this.setState({ cart: [...cart, ...data] });
		alert('The product has been added to the cart.');
	};

	checkOut = (id) => {
		const { cart } = this.state;
		cart.forEach((item, index) => {
			if (item._id === id) {
				cart.splice(index, 100);
			}
		});
		this.setState({ cart: cart });
	};

	render() {
		const { products, cart, total } = this.state;
		const { addCart, removeCart, checkOut } = this;
		return (
			<DataContext.Provider
				value={{ products, addCart, cart, removeCart, total, checkOut }}
			>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}

export default DataProvider;
