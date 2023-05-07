import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import itemCart from "@icons/bt_add_to_cart.svg";
const ProductItem = () => {
	const [ cart, setCart ] = useState([]);
	const handleClick =()=>{
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={Product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{Product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={itemCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
